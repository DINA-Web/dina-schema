const { join } = require('path')
const fs = require('fs')
const createResponse = require('../../../../factories/utilities/createEndpointResponse')
const { basePath } = require('../shared')

const description = fs.readFileSync(join(__dirname, './description.md'), 'utf8')
const path = `${basePath}individualGroups`

module.exports = {
  description,
  method: 'get',
  path,
  queryParams: {
    'filter[catalogNumber]': {
      description: 'catalog number used to filter individualGroups',
      example: '123456',
      required: false,
      schema: {
        type: 'string',
      },
    },
    'filter[identifiedTaxonNameStandardized]': {
      description: 'Standardized taxon name used to filter individualGroups',
      example: 'Chironectes minimus',
      required: false,
      schema: {
        type: 'string',
      },
    },
  },
  response: createResponse({
    format: 'array',
    include: ['physicalUnit', 'curatedLocality'],
    operationId: 'getIndividualGroup',
    resource: 'individualGroup',
    selfLink: path,
  }),
  summary: 'Finds individualGroups',
}
