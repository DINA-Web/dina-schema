const createResponse = require('../../../../../factories/utilities/createEndpointResponse')
const { basePath } = require('../../index.json')

const path = `${basePath}inventoryUnits/{id}/physicalUnits`

const selfLink = path

module.exports = {
  method: 'get',
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
    format: 'array',
    operationId: 'getInventoryUnitPhysicalUnits',
    relations: [
      {
        key: 'inventoryUnit',
        selfLink: '/api/v01/inventoryUnits/{id}',
      },
    ],
    resource: 'physicalUnit',
    selfLink,
  }),
  summary: 'Gets all physicalUnits associated with an inventoryUnit',
}
