const path = require('path')
const fs = require('fs')
const interpolate = require('./interpolate')

module.exports = function createDefinitions(
  { attachIds = false, referenceRoot = '#/definitions/', type = 'models' } = {}
) {
  const definitionsPath = path.join(
    __dirname,
    '../',
    '../',
    'specification',
    type
  )

  const files = fs.readdirSync(definitionsPath)
  const result = files.reduce((definitions, fileName) => {
    if (fileName[0] === '.') {
      return definitions
    }
    const fullPath = path.join(definitionsPath, fileName)
    const definition = require(fullPath)
    const name = fileName.replace('.json', '')
    if (attachIds) {
      definition.id = name
    }

    if (fs.lstatSync(fullPath).isDirectory()) {
      const descriptionFilePath = path.join(fullPath, 'description.md')
      if (fs.existsSync(descriptionFilePath)) {
        definition.description = fs.readFileSync(descriptionFilePath, 'utf8')
      }

      const exampleFilePath = path.join(fullPath, 'example.json')
      if (fs.existsSync(exampleFilePath)) {
        definition.example = require(exampleFilePath)
      }
    }
    definitions[name] = definition

    return definitions
  }, {})

  return interpolate(result, '__ROOT__', referenceRoot)
}
