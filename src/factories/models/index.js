const createDefinitions = require('../shared/createDefinitions')

/* eslint-disable sort-keys */

const referenceRoot = ''
const modelDefinitions = createDefinitions({
  attachIds: true,
  referenceRoot,
  type: 'models',
})

const responseDefinitions = createDefinitions({
  attachIds: true,
  referenceRoot,
  type: 'responses',
})

const requestDefinitions = createDefinitions({
  attachIds: true,
  referenceRoot,
  type: 'requests',
})

const definitions = {
  ...modelDefinitions,
  ...responseDefinitions,
  ...requestDefinitions,
}

module.exports = function createSwaggerSpecification() {
  return definitions
}
