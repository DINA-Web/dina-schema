const createResponse = require('../../../../../factories/utilities/createEndpointResponse')
const { basePath } = require('../../index.json')

const path = `${basePath}batchUploads/{id}/items/{itemId}`
const batchUploadPath = `${basePath}batchUploads/{id}`

module.exports = {
  method: 'patch',
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
    itemId: {
      description: 'Batch upload item id',
      example: '1',
      required: true,

      schema: {
        type: 'string',
      },
    },
  },

  response: createResponse({
    format: 'object',
    operationId: 'updateBatchUploadItem',
    relations: [
      {
        key: 'batchUpload',
        selfLink: batchUploadPath,
      },
    ],
    resource: 'batchItem',
    selfLink: path,
  }),
  summary: 'Update a batch upload item',
}
