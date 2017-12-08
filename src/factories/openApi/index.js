const createBase = require('./createBase')
const createPaths = require('./createPaths')
const createTags = require('../shared/createTags')
const createDefinitions = require('../shared/createDefinitions')
const sampleConfig = require('../../sample.config.json')
const packageJson = require('../../../package.json')

module.exports = function createSwaggerSpecification(config = sampleConfig) {
  const base = createBase({ ...config }, { ...packageJson })
  const referenceRoot = '#/components/schemas/'
  const tags = createTags()
  const paths = createPaths({
    referenceRoot,
    wrapExamples: false,
  })

  const modelDefinitions = createDefinitions({
    attachIds: false,
    referenceRoot,
    type: 'models',
  })

  const responseDefinitions = createDefinitions({
    attachIds: false,
    referenceRoot,
    type: 'responses',
  })

  const requestDefinitions = createDefinitions({
    attachIds: false,
    referenceRoot,
    type: 'requests',
  })

  const definitions = {
    ...modelDefinitions,
    ...responseDefinitions,
    ...requestDefinitions,
  }

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
