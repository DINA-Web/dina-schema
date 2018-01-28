const createResponse = require('../../../../factories/utilities/createEndpointResponse')

module.exports = {
  method: 'get',
  path: '/api/v01/physicalUnits',
  response: createResponse({
    description: 'A custom response description',
    format: 'array',
    operationId: 'getPhysicalUnits',
    resource: 'physicalUnit',
  }),
  summary: 'Get a physicalUnits',
}
