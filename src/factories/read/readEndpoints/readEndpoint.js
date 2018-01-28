const fs = require('fs')
const path = require('path')

const readAsJson = require('./readAsJson')
const readAsJs = require('./readAsJs')

module.exports = function readEndpoint({
  endpointName,
  endpointPath,
  serverName,
}) {
  const jsPath = path.join(endpointPath, 'index.js')
  const isJsFile = fs.existsSync(jsPath)

  if (isJsFile) {
    return readAsJs({
      endpointName,
      endpointPath: jsPath,
      serverName,
    })
  }

  return readAsJson({
    endpointName,
    endpointPath,
    serverName,
  })
}
