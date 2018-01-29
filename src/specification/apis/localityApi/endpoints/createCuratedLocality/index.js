const createResponse = require('../../../../../factories/utilities/createEndpointResponse')

const { basePath } = require('../../index.json')

const path = `${basePath}curatedLocalities`
const selfLink = `${path}/{id}`

module.exports = {
  method: 'post',
  path,
  response: createResponse({
    format: 'object',
    operationId: 'createCuratedLocality',
    resource: 'curatedLocality',
    selfLink,
  }),
  summary: 'Create a curatedLocality',
}
