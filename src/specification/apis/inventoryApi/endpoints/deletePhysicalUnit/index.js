const createResponse = require('../../../../../factories/utilities/createEndpointResponse')
const { basePath } = require('../../index.json')

const path = `${basePath}physicalUnits/{id}`

module.exports = {
  method: 'delete',
  path,
  pathParams: {
    id: {
      description: 'physicalUnits id',
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
    resource: 'physicalUnit',
  }),
  summary: 'Delete a physical unit',
}
