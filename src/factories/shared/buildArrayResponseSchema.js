const interpolate = require('./interpolate')
/* eslint-disable sort-keys */
const arrayResponseSchemaBase = {
  additionalProperties: false,
  properties: {
    data: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
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
  },
}

module.exports = function buildArrayResponseSchema(type, model) {
  const withInterpolatedType = interpolate(
    arrayResponseSchemaBase,
    '__TYPE__',
    type
  )
  return interpolate(withInterpolatedType, '__MODEL__', model)
}
