const createResponse = require('../../../../factories/utilities/createEndpointResponse')
const createRequest = require('../../../../factories/utilities/createEndpointRequest')

const path = '/api/v01/physicalUnits/{id}'
const selfLink = path

module.exports = {
  method: 'put',
  path,
  request: createRequest({
    format: 'object',
    operationId: 'updatePhysicalUnit',
    resource: 'physicalUnit',
  }),
  response: createResponse({
    format: 'object',
    operationId: 'updatePhysicalUnit',
    resource: 'physicalUnit',
    selfLink,
  }),
  summary: 'Update a physicalUnit',
}
