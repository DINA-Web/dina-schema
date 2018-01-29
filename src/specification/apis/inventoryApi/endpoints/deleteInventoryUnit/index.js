const createResponse = require('../../../../../factories/utilities/createEndpointResponse')
const { basePath } = require('../../index.json')

const path = `${basePath}inventoryUnits/{id}`

module.exports = {
  method: 'delete',
  path,
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
