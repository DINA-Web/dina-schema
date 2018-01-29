const createResponse = require('../../../../factories/utilities/createEndpointResponse')

module.exports = {
  method: 'delete',
  path: '/api/v01/inventoryUnits/{id}',
  pathParams: {
    id: {
      description: 'inventoryUnit id',
      example: 1,
      required: true,
      schema: {
        type: 'string',
      },
    },
  },
  response: createResponse({
    format: 'object',
    operationId: 'deletePhysicalUnit',
    resource: 'inventoryUnit',
  }),
  summary: 'Delete an inventory unit',
}
