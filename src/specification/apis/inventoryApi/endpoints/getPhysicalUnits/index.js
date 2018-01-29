const createResponse = require('../../../../../factories/utilities/createEndpointResponse')

const { basePath } = require('../../index.json')

const path = `${basePath}physicalUnits`

const selfLink = path

module.exports = {
  method: 'get',
  path,
  response: createResponse({
    format: 'array',
    operationId: 'getPhysicalUnits',
    relations: [
      {
        key: 'inventoryUnit',
        selfLink: '/api/v01/inventoryUnits/{id}',
      },
    ],
    resource: 'physicalUnit',
    selfLink,
  }),
  summary: 'Get a physicalUnits',
}
