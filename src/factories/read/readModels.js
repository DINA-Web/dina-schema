const readJsonFromDirectory = require('./utilities/readJsonFromDirectory')

module.exports = function readModels(modelsBasePath) {
  return readJsonFromDirectory(modelsBasePath, true)
}
