const createResponse = require('../../../../factories/utilities/createEndpointResponse')

const path = '/api/v01/inventoryUnits'
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
