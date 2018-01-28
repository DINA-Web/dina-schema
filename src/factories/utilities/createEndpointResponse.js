/* eslint-disable sort-keys */

module.exports = function createResponse({
  description,
  format,
  operationId,
  resource,
}) {
  const name = `${operationId}Response`
  if (format === 'array') {
    return {
      name,
      schema: {
        description: description || 'this is a desc',
        content: {
          additionalProperties: false,
          type: 'object',
          properties: {
            data: {
              type: 'array',
              additionalProperties: false,
              items: {
                type: 'object',
                properties: {
                  type: {
                    type: 'string',
                    default: resource,
                  },
                  id: {
                    type: 'string',
                    example: '1234',
                  },
                  attributes: {
                    $ref: `__ROOT__${resource}`,
                  },
                },
              },
            },
          },
        },
      },
    }
  }

  return {
    name,
    schema: {
      description: description || 'this is a desc for request',
      content: {
        additionalProperties: false,
        type: 'object',
        properties: {
          data: {
            type: 'object',
            additionalProperties: false,
            properties: {
              id: {
                type: 'string',
                example: '1234',
              },
              type: {
                type: 'string',
                default: resource,
              },
              attributes: {
                $ref: `__ROOT__${resource}`,
              },
            },
          },
        },
      },
    },
  }
}
