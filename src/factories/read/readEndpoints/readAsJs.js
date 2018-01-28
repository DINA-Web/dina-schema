module.exports = function readAsJs({ endpointPath, serverName }) {
  const endpoint = require(endpointPath)
  const tags = endpoint.tags ? [...endpoint.tags, serverName] : [serverName]

  return {
    ...endpoint,
    tags,
  }
}
