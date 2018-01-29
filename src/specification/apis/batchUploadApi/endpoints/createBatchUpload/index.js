const createResponse = require('../../../../../factories/utilities/createEndpointResponse')
const createRequest = require('../../../../../factories/utilities/createEndpointRequest')
const { basePath } = require('../../index.json')

const path = `${basePath}batchUploads`

module.exports = {
  method: 'post',
  path,
  request: createRequest({
    description: 'A custom request description',
    format: 'object',
    operationId: 'createBatchUpload',
    resource: 'batchUpload',
  }),
  response: createResponse({
    format: 'object',
    operationId: 'createBatchUpload',
    resource: 'batchUpload',
    selfLink: path,
  }),
  summary: 'Create a batch upload',
}
