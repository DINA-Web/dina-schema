const createResponse = require('../../../../../factories/utilities/createEndpointResponse')
const { basePath } = require('../../index.json')

const path = `${basePath}inventoryUnits`

const selfLink = path

module.exports = {
  method: 'get',
  path,
  response: createResponse({
    format: 'array',
    operationId: 'getInventoryUnits',
    relations: [
      {
        key: 'physicalUnits',
        selfLink: '/api/v01/inventoryUnits/{id}/physicalUnits',
      },
    ],
    resource: 'inventoryUnit',
  }),
  selfLink,
  summary: 'Get inventoryUnits',
}
