const createBase = require('./createBase')
const createPaths = require('../shared/createPaths')
const createTags = require('../shared/createTags')
const createDefinitions = require('../shared/createDefinitions')
const sampleConfig = require('../../sample.config.json')
const packageJson = require('../../../package.json')

const paths = createPaths({
  wrapExamples: true,
})
const tags = createTags()

const definitions = createDefinitions({
  attachIds: false,
  referenceRoot: '#/definitions/',
})

module.exports = function createSwaggerSpecification(config = sampleConfig) {
  const base = createBase(
    Object.assign({}, config),
    Object.assign({}, packageJson)
  )
  base.tags = tags
  base.paths = paths
  base.definitions = definitions
  return base
}
