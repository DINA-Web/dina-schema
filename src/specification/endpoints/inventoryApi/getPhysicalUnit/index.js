const createResponse = require('../../../../factories/utilities/createEndpointResponse')

module.exports = {
  method: 'get',
  path: '/api/v01/physicalUnits/{id}',
  pathParams: {
    id: {
      description: 'physicalUnits id',
      example: '1',
      required: true,
      schema: {
        type: 'string',
      },
    },
  },
  response: createResponse({
    description: 'A custom response description',
    format: 'object',
    operationId: 'getPhysicalUnits',
    resource: 'physicalUnit',
  }),
  summary: 'Get a physicalUnits by id',
}
