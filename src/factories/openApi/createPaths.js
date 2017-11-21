const path = require('path')
const fs = require('fs')
const buildArrayResponseSchema = require('../shared/buildArrayResponseSchema')

const buildVerb = ({ basePath, verbName, wrapExamples }) => {
  const verbPath = path.join(basePath, verbName)
  const verbDescriptionPath = path.join(verbPath, 'description.md')
  const verbExamplePath = path.join(verbPath, 'example.json')

  const verbObject = require(verbPath)
  if (fs.existsSync(verbDescriptionPath)) {
    verbObject.description = fs.readFileSync(verbDescriptionPath, 'utf8')
  }

  if (fs.existsSync(verbExamplePath)) {
    const example = require(verbExamplePath)
    if (wrapExamples) {
      verbObject.responses['200'].examples = {
        'application/json': example,
      }
    } else {
      verbObject.responses['200'].example = example
    }
  }

  if (verbObject.responses['200'].$schema) {
    if (verbObject.responses['200'].$schema.$type === 'arrayResponse') {
      const model = verbObject.responses['200'].$schema.$model
      const modelType = verbObject.responses['200'].$schema.$modelType
      verbObject.responses['200'].schema = buildArrayResponseSchema(
        modelType,
        model
      )
    }
    delete verbObject.responses['200'].$schema
  }
  verbObject.responses['200'].content = {
    'application/json': {
      schema: verbObject.responses['200'].schema,
    },
  }
  delete verbObject.responses['200'].schema
  return verbObject
}

module.exports = function createPaths(
  { wrapExamples = true, referenceRoot = '#/definitions/' } = {}
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
    let pathObject

    if (!isDirectory) {
      pathObject = require(fullPath)
    } else {
      const verbs = fs.readdirSync(fullPath)
      pathObject = verbs.reduce((obj, verbName) => {
        if (verbName[0] === '.') {
          return obj
        }

        const verb = buildVerb({
          basePath: fullPath,
          verbName,
          wrapExamples,
        })
        obj[verbName] = verb
        return obj
      }, {})
    }

    paths[`/${name}`] = pathObject
    return paths
  }, {})

  return JSON.parse(JSON.stringify(result).replace(/__ROOT__/g, referenceRoot))
}
