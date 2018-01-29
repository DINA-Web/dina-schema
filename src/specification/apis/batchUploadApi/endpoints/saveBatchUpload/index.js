const createResponse = require('../../../../../factories/utilities/createEndpointResponse')
const { basePath } = require('../../index.json')

const path = `${basePath}batchUploads/{id}/save`
const selfLink = `${basePath}batchUploads/{id}`

module.exports = {
  method: 'post',
  path,
  response: createResponse({
    format: 'object',
    operationId: 'saveBatchUpload',
    resource: 'batchUpload',
    selfLink,
  }),
  summary: 'Save a batch upload',
}
