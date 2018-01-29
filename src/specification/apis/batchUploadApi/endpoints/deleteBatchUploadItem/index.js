const createResponse = require('../../../../../factories/utilities/createEndpointResponse')
const { basePath } = require('../../index.json')

const path = `${basePath}batchUploads/{id}/items/{itemId}`

module.exports = {
  method: 'delete',
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
    operationId: 'deleteBatchUpload',
    resource: 'batchItem',
    selfLink: path,
  }),
  summary: 'Delete a batch upload item',
}
