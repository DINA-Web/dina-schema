const { join } = require('path')
const fs = require('fs')
const createResponse = require('../../../../../factories/utilities/createEndpointResponse')
const createRequest = require('../../../../../factories/utilities/createEndpointRequest')
const { basePath } = require('../../index.json')

const description = fs.readFileSync(join(__dirname, './description.md'), 'utf8')
const path = `${basePath}individualGroups/{id}`
const versionsLink = `${path}/versions`

module.exports = {
  description,
  method: 'patch',
  path,
  pathParams: {
    id: {
      description: 'Individual group id',
      example: 1,
      required: true,
      schema: {
        type: 'integer',
      },
    },
  },
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
  summary: 'Update an individual group by id',
}
