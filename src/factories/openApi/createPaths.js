const path = require('path')
const fs = require('fs')
const buildArrayResponseSchema = require('../shared/buildArrayResponseSchema')
const buildObjectResponseSchema = require('../shared/buildObjectResponseSchema')
const interpolate = require('../shared/interpolate')

const getDescription = ({ verbObject, verbPath }) => {
  const verbDescriptionPath = path.join(verbPath, 'description.md')
  if (fs.existsSync(verbDescriptionPath)) {
    return fs.readFileSync(verbDescriptionPath, 'utf8')
  }
  return verbObject.description
}

// const getExample = ({ verbObject, verbPath }) => {
//   const verbExamplePath = path.join(verbPath, 'example.json')

//   if (fs.existsSync(verbExamplePath)) {
//     return require(verbExamplePath)
//   }
//   return verbObject.example // not really but for now
// }

const buildSchema = ({ rawResponseObject }) => {
  if (rawResponseObject.schema) {
    return rawResponseObject.schema
  }

  const { $model, $modelType, $type } = rawResponseObject.$schema || {}

  if ($type) {
    if ($type === 'arrayResponse') {
      const model = $model
      const modelType = $modelType
      return buildArrayResponseSchema(modelType, model)
    }

    if ($type === 'objectResponse') {
      const model = $model
      const modelType = $modelType
      return buildObjectResponseSchema(modelType, model)
    }
  }
  return null
}

const buildResponse = ({ statusCode, rawResponseObject }) => {
  if (statusCode !== '200') {
    return rawResponseObject
  }

  const schema = buildSchema({
    rawResponseObject,
  })

  const respose = {
    ...rawResponseObject,
    content: {
      'application/json': {
        schema,
      },
    },
  }
  delete respose.schema
  return respose
}

const buildResponses = ({ verbObject }) => {
  const rawResponses = verbObject.responses
  return Object.keys(rawResponses).reduce((responses, statusCode) => {
    const rawResponseObject = rawResponses[statusCode]
    return {
      ...responses,
      [statusCode]: buildResponse({
        rawResponseObject,
        statusCode,
      }),
    }
  }, {})
}

const buildVerb = ({ basePath, verbName }) => {
  const verbPath = path.join(basePath, verbName)

  let verbObject = require(verbPath)
  verbObject = {
    ...verbObject,
    description: getDescription({
      verbObject,
      verbPath,
    }),
  }

  verbObject = {
    ...verbObject,
    responses: buildResponses({ verbObject }),
  }

  return verbObject
}

module.exports = function createPaths(
  { referenceRoot = '#/definitions/' } = {}
) {
  const pathsPath = path.join(__dirname, '../', '../', 'specification', 'paths')
  const files = fs.readdirSync(pathsPath)
  const result = files.reduce((paths, fileName) => {
    const fullPath = path.join(pathsPath, fileName)

    const name = fileName
      .replace('.json', '')
      .split(':')
      .join('/')

    const isDirectory = fs.lstatSync(fullPath).isDirectory()

    if (!isDirectory) {
      throw new Error(
        'Path definition need to be separated into different verbs'
      )
    }
    const verbs = fs.readdirSync(fullPath)
    const pathObject = verbs.reduce((obj, verbName) => {
      if (verbName[0] === '.') {
        return obj
      }

      const verb = buildVerb({
        basePath: fullPath,
        verbName,
      })
      obj[verbName] = verb
      return obj
    }, {})

    return {
      ...paths,
      [`/${name}`]: pathObject,
    }
  }, {})

  return interpolate(result, '__ROOT__', referenceRoot)
}
