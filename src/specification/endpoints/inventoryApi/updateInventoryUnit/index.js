const createResponse = require('../../../../factories/utilities/createEndpointResponse')
const createRequest = require('../../../../factories/utilities/createEndpointRequest')

const path = '/api/v01/inventoryUnits/{id}'
const selfLink = path

module.exports = {
  method: 'patch',
  path,
  request: createRequest({
    format: 'object',
    operationId: 'updateInventoryUnit',
    resource: 'physicalUnit',
  }),
  response: createResponse({
    format: 'object',
    operationId: 'updateInventoryUnit',
    resource: 'inventoryUnit',
    selfLink,
  }),
  summary: 'Update an inventoryUnits',
}
