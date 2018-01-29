const createResponse = require('../../../../../factories/utilities/createEndpointResponse')
const createRequest = require('../../../../../factories/utilities/createEndpointRequest')
const { basePath } = require('../../index.json')

const path = `${basePath}inventoryUnits/{id}`

const selfLink = path

module.exports = {
  method: 'patch',
  path,
  pathParams: {
    id: {
      description: 'inventoryUnits id',
      example: 1,
      required: true,
      schema: {
        type: 'integer',
      },
    },
  },
  request: createRequest({
    format: 'object',
    operationId: 'updateInventoryUnit',
    resource: 'inventoryUnit',
  }),
  response: createResponse({
    format: 'object',
    operationId: 'updateInventoryUnit',
    resource: 'inventoryUnit',
    selfLink,
  }),
  summary: 'Update an inventoryUnits',
}
