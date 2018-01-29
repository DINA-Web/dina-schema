const createResponse = require('../../../../../factories/utilities/createEndpointResponse')
const { basePath } = require('../../index.json')

const path = `${basePath}batchUploads/{id}/items`
const batchUploadPath = `${basePath}batchUploads/{id}`

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
    format: 'array',
    operationId: 'getBatchUploadItems',
    relations: [
      {
        key: 'batchUpload',
        selfLink: batchUploadPath,
      },
    ],
    resource: 'batchItem',
    selfLink: path,
  }),
  summary: 'Get batchUpload items',
}
