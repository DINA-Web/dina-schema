const createResponse = require('../../../../../factories/utilities/createEndpointResponse')
const { basePath } = require('../../index.json')

const path = `${basePath}batchUploads/{id}`

module.exports = {
  method: 'get',
  path,
  pathParams: {
    id: {
      description: 'Batch upload id',
      example: '1',
      required: true,
      schema: {
        type: 'string',
      },
    },
  },
  response: createResponse({
    format: 'object',
    operationId: 'getBatchUpload',
    relations: [
      {
        key: 'batchItems',
        selfLink: `${path}/batchItems`,
      },
    ],
    resource: 'batchUpload',
    selfLink: path,
  }),
  summary: 'Get a batch upload by id',
}
