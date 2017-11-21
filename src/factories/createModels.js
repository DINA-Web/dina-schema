const createDefinitions = require('./createDefinitions')

/* eslint-disable sort-keys */

const definitions = createDefinitions({ attachIds: true, referenceRoot: '' })

module.exports = function createSwaggerSpecification() {
  return definitions
}
