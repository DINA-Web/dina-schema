const readJsonFromDirectory = require('./utilities/readJsonFromDirectory')

module.exports = function readModels(modelsBasePath) {
  return readJsonFromDirectory({
    directory: modelsBasePath,
    includeProperties: true,
    modelType: 'model',
  })
}
