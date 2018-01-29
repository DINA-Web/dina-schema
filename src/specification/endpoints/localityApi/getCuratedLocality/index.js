const createResponse = require('../../../../factories/utilities/createEndpointResponse')

module.exports = {
  method: 'get',
  path: '/collections/api/v01/curatedLocality/{id}',
  pathParams: {
    id: {
      description: 'Curated locality id"',
      example: '1',
      required: true,
      schema: {
        type: 'string',
      },
    },
  },
  response: createResponse({
    format: 'object',
    operationId: 'getCuratedLocality',
    resource: 'curatedLocality',
    resourcePlural: 'curatedLocalities',
  }),
  summary: 'Find latest version of a curatedLocality',
}
