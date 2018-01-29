const readJsonFromDirectory = require('./utilities/readJsonFromDirectory')

module.exports = function readApis(apisBasePath) {
  const spec = readJsonFromDirectory({ directory: apisBasePath })

  return Object.keys(spec).reduce((apis, key) => {
    const api = spec[key] || {}
    return {
      ...apis,
      [key]: {
        description: api.description,
        name: api.name,
        url: api.url,
      },
    }
  }, {})
}
