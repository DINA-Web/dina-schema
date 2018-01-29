const createResponse = require('../../../../../factories/utilities/createEndpointResponse')

const { basePath } = require('../../index.json')

const path = `${basePath}curatedLocality/{id}/versions/{versionId}`

module.exports = {
  method: 'get',
  path,
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
    operationId: 'getCuratedLocalityByVersion',
    resource: 'curatedLocality',
    selfLink: path,
  }),
  summary: 'Find a specific version of a curatedLocality',
}
