const createResponse = require('../../../../factories/utilities/createEndpointResponse')

const path = '/api/v01/inventoryUnits/{id}'
const selfLink = path

module.exports = {
  method: 'get',
  path: '/api/v01/inventoryUnits/{id}',
  pathParams: {
    id: {
      description: 'inventoryUnit id',
      example: '1',
      required: true,
      schema: {
        type: 'string',
      },
    },
  },
  response: createResponse({
    format: 'object',
    operationId: 'getInventoryUnit',
    relations: [
      {
        key: 'physicalUnits',
        selfLink: '/api/v01/inventoryUnits/{id}/physicalUnits',
      },
    ],
    resource: 'inventoryUnit',
    selfLink,
  }),
  summary: 'Get a inventoryUnit by id',
}
