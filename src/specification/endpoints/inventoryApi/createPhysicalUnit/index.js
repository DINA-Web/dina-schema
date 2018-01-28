const createResponse = require('../../../../factories/utilities/createEndpointResponse')
const createRequest = require('../../../../factories/utilities/createEndpointRequest')

module.exports = {
  method: 'post',
  path: '/api/v01/physicalUnits',
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
  summary: 'Create a physicalUnit',
}
