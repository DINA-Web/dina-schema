const interpolate = require('./interpolate')
/* eslint-disable sort-keys */
const objectResponseSchemaBase = {
  additionalProperties: false,
  properties: {
    data: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
          example: 1234,
        },
        type: {
          type: 'string',
          default: '__TYPE__',
          example: '__TYPE__',
        },
        attributes: {
          $ref: '__MODEL__',
        },
      },
    },
  },
}

module.exports = function buildObjectResponseSchema(type, model) {
  const withInterpolatedType = interpolate(
    objectResponseSchemaBase,
    '__TYPE__',
    type
  )
  return interpolate(withInterpolatedType, '__MODEL__', model)
}
