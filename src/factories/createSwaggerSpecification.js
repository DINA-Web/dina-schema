const createBase = require('./createBase')
const createPaths = require('./createPaths')
const createTags = require('./createTags')
const createDefinitions = require('./createDefinitions')
const sampleConfig = require('../sample.config.json')
const packageJson = require('../../package.json')

const paths = createPaths({
  wrapExamples: true,
})
const tags = createTags()

const definitions = createDefinitions({
  attachIds: false,
  referenceRoot: '#/definitions/',
})

module.exports = function createSwaggerSpecification(config = sampleConfig) {
  const base = createBase(config, packageJson)
  base.tags = tags
  base.paths = paths
  base.definitions = definitions
  return base
}
