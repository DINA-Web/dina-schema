const createResponse = require('../../../../../factories/utilities/createEndpointResponse')
const createRequest = require('../../../../../factories/utilities/createEndpointRequest')
const { basePath } = require('../../index.json')

const path = `${basePath}curatedLocalities/{id}`

const selfLink = path

module.exports = {
  method: 'patch',
  path,
  request: createRequest({
    format: 'object',
    operationId: 'updateCuratedLocality',
    resource: 'curatedLocality',
  }),
  response: createResponse({
    format: 'object',
    operationId: 'updateCuratedLocality',
    resource: 'curatedLocality',
    selfLink,
  }),
  summary: 'Update an curatedLocality',
}
