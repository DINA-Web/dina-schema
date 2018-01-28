const createResponse = require('../../../../factories/utilities/createEndpointResponse')
const createRequest = require('../../../../factories/utilities/createEndpointRequest')

module.exports = {
  method: 'put',
  path: '/api/v01/physicalUnits/{id}',
  request: createRequest({
    description: 'A custom request description',
    format: 'object',
    operationId: 'createPhysicalUnit',
    resource: 'physicalUnit',
  }),
  response: createResponse({
    description: 'A custom response description',
    format: 'object',
    operationId: 'createPhysicalUnit',
    resource: 'physicalUnit',
  }),
  summary: 'Update a physicalUnit',
}
