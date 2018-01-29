const { join } = require('path')
const fs = require('fs')
const createResponse = require('../../../../factories/utilities/createEndpointResponse')
const createRequest = require('../../../../factories/utilities/createEndpointRequest')
const { basePath } = require('../shared')

const description = fs.readFileSync(join(__dirname, './description.md'), 'utf8')

const path = `${basePath}individualGroups`
const versionsLink = `${path}/versions`

module.exports = {
  description,
  method: 'post',
  path,
  request: createRequest({
    description: 'A custom request description',
    format: 'object',
    operationId: 'createIndividualGroup',
    resource: 'individualGroup',
  }),
  response: createResponse({
    format: 'object',
    operationId: 'createIndividualGroup',
    resource: 'individualGroup',
    selfLink: path,
    versionsLink,
  }),
  summary: 'Create an individual group and a catalogUnit if not existing',
}
