const createResponse = require('../../../../factories/utilities/createEndpointResponse')
const { basePath } = require('../shared')

const path = `${basePath}individualGroups/{id}`
const versionsLink = `${path}/versions`

module.exports = {
  method: 'get',
  path,
  pathParams: {
    id: {
      description: 'individualGroup id',
      example: '1',
      required: true,
      schema: {
        type: 'string',
      },
    },
  },
  response: createResponse({
    format: 'object',
    include: ['physicalUnit', 'curatedLocality'],
    operationId: 'getIndividualGroup',
    resource: 'individualGroup',
    selfLink: path,
    versionsLink,
  }),
  summary: 'Get a individualGroup by id',
}
