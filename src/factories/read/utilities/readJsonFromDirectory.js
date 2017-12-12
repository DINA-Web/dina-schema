const fs = require('fs')
const readParameterFromJsonFile = require('./readParameterFromJsonFile')

module.exports = function readJsonFromDirectory(directory, includeProperties) {
  if (!fs.existsSync(directory)) {
    return {}
  }

  return fs.readdirSync(directory).reduce((obj, fileName) => {
    const file = readParameterFromJsonFile({
      basePath: directory,
      includeProperties,
      parameterName: fileName,
    })

    if (file) {
      return {
        ...obj,
        [fileName]: file,
      }
    }
    return obj
  }, {})
}
