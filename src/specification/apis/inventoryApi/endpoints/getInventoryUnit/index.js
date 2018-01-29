const createResponse = require('../../../../../factories/utilities/createEndpointResponse')
const { basePath } = require('../../index.json')

const path = `${basePath}inventoryUnits/{id}`
const selfLink = path

module.exports = {
  method: 'get',
  path,
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
        selfLink: `${path}/physicalUnits`,
      },
    ],
    resource: 'inventoryUnit',
    selfLink,
  }),
  summary: 'Get a inventoryUnit by id',
}
