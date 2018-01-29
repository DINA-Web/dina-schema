const createResponse = require('../../../../../factories/utilities/createEndpointResponse')
const { basePath } = require('../../index.json')

const path = `${basePath}batchUploads`

module.exports = {
  method: 'get',
  path,
  response: createResponse({
    format: 'array',
    operationId: 'getBatchUploads',
    relations: [
      {
        key: 'batchItems',
        selfLink: `${path}/{id}/batchItems`,
      },
    ],
    resource: 'batchUpload',
    selfLink: path,
  }),
  summary: 'Get batchUploads',
}
