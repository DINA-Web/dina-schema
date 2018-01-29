const createResponse = require('../../../../factories/utilities/createEndpointResponse')

module.exports = {
  method: 'get',
  path: '/collections/api/v01/curatedLocality/{id}/versions/{versionId}',
  pathParams: {
    id: {
      description: 'Curated locality id',
      example: '1',
      required: true,
      schema: {
        type: 'integer',
      },
    },
    versionId: {
      description: 'Curated locality versionId',
      example: '1',
      required: true,
      schema: {
        type: 'integer',
      },
    },
  },
  response: createResponse({
    format: 'object',
    operationId: 'getCuratedLocality',
    resource: 'curatedLocality',
    resourcePlural: 'curatedLocalities',
  }),
  summary: 'Find a specific version of a curatedLocality',
}
