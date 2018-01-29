const fs = require('fs')
const path = require('path')
const readEndpoint = require('./readEndpoint')

module.exports = function walkEndpoints({ directory }) {
  const serverNames = fs.readdirSync(directory)
  const endpoints = {}
  const pathMethodNames = {}

  serverNames.forEach(serverName => {
    const serverPath = path.join(directory, serverName)
    if (fs.statSync(path.join(serverPath)).isDirectory()) {
      const endpointDirectories = fs.readdirSync(
        path.join(serverPath, 'endpoints')
      )

      endpointDirectories.forEach(endpointName => {
        if (endpointName !== 'shared' && endpointName[0] !== '.') {
          if (endpoints[endpointName]) {
            throw new Error(
              `Endpoint with name: ${endpointName} already registered`
            )
          }
          const endpointPath = path.join(serverPath, 'endpoints', endpointName)
          const endpoint = readEndpoint({
            endpointName,
            endpointPath,
            serverName,
          })
          const pathMethodName = `${endpoint.method}-${endpoint.path}`
          if (pathMethodNames[pathMethodName]) {
            throw new Error(
              `Path for ${endpointName} already registered: ${pathMethodName}`
            )
          }
          pathMethodNames[pathMethodName] = true

          endpoints[endpointName] = endpoint
        }
      })
    }
  })

  return endpoints
}
