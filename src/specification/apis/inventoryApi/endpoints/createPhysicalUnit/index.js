const createResponse = require('../../../../../factories/utilities/createEndpointResponse')
const createRequest = require('../../../../../factories/utilities/createEndpointRequest')
const { basePath } = require('../../index.json')

const path = `${basePath}physicalUnits`
const selfLink = `${path}/{id}`

module.exports = {
  method: 'post',
  path,
  request: createRequest({
    format: 'object',
    operationId: 'createPhysicalUnit',
    resource: 'physicalUnit',
  }),
  response: createResponse({
    format: 'object',
    operationId: 'createPhysicalUnit',
    relations: [
      {
        key: 'inventoryUnit',
        selfLink: '/api/v01/inventoryUnits/{id}',
      },
    ],
    resource: 'physicalUnit',
    selfLink,
  }),
  summary: 'Create a physicalUnit',
}
