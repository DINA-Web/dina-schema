const createBase = require('./createBase')
const createPaths = require('./createPaths')
const createTags = require('../shared/createTags')
const createDefinitions = require('../shared/createDefinitions')
const sampleConfig = require('../../sample.config.json')
const packageJson = require('../../../package.json')

const paths = createPaths({
  referenceRoot: '#/components/schemas/',
  wrapExamples: false,
})
const tags = createTags()

const definitions = createDefinitions({
  attachIds: false,
  referenceRoot: '#/components/schemas/',
})

module.exports = function createSwaggerSpecification(config = sampleConfig) {
  const base = createBase(
    Object.assign({}, config),
    Object.assign({}, packageJson)
  )
  base.tags = tags
  base.paths = paths
  base.components = {
    schemas: definitions,
    securitySchemes: {
      api_key: {
        in: 'header',
        name: 'api_key',
        type: 'apiKey',
      },
    },
  }
  return base
}
