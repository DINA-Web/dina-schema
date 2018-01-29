const createResponse = require('../../../../../factories/utilities/createEndpointResponse')
const { basePath } = require('../../index.json')

const path = `${basePath}curatedLocality/{id}`

module.exports = {
  method: 'get',
  path,
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
    selfLink: path,
  }),
  summary: 'Find latest version of a curatedLocality',
}
