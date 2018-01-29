const createResponse = require('../../../../../factories/utilities/createEndpointResponse')
const createRequest = require('../../../../../factories/utilities/createEndpointRequest')
const { basePath } = require('../../index.json')

const path = `${basePath}inventoryUnits`

const selfLink = `${path}/{id}`

module.exports = {
  method: 'post',
  path,
  request: createRequest({
    description: 'A custom request description',
    format: 'object',
    operationId: 'createInventoryUnit',
    resource: 'inventoryUnit',
  }),
  response: createResponse({
    format: 'object',
    operationId: 'createInventoryUnit',
    relations: [
      {
        key: 'physicalUnits',
        selfLink: '/api/v01/inventoryUnits/{id}/physicalUnits',
      },
    ],
    resource: 'inventoryUnit',
    selfLink,
  }),
  summary: 'Create an inventoryUnit',
}
