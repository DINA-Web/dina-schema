const fs = require('fs')
const path = require('path')

const readParameterFromMarkdownFile = require('./readParameterFromMarkdownFile')

/*
* Some magic going on here. Should be divided into differet functions
*
*/
module.exports = function readParameterFromJsonFile({
  basePath,
  parameterName,
  includeProperties = false,
}) {
  let parameterJsonPath = path.join(basePath, `${parameterName}.json`)
  if (fs.existsSync(parameterJsonPath)) {
    return require(parameterJsonPath)
  }

  const parameterJsonFolderPath = path.join(basePath, `${parameterName}`)

  if (
    fs.existsSync(parameterJsonFolderPath) &&
    fs.statSync(parameterJsonFolderPath).isDirectory()
  ) {
    parameterJsonPath = path.join(parameterJsonFolderPath, 'index.json')
    if (fs.existsSync(parameterJsonPath)) {
      let json = require(parameterJsonPath)
      const description = readParameterFromMarkdownFile(
        parameterJsonFolderPath,
        'description'
      )
      if (description) {
        json = {
          ...json,
          description,
        }
      }

      if (includeProperties) {
        const fileNames = fs
          .readdirSync(parameterJsonFolderPath)
          .filter(filaName => {
            return !['index.json', 'description.md', 'example.json'].includes(
              filaName
            )
          })

        const extraProperties = fileNames.reduce((properties, fileName) => {
          const property = readParameterFromJsonFile({
            basePath: parameterJsonFolderPath,
            parameterName: fileName,
          })
          return {
            ...properties,
            [fileName]: property,
          }
        }, {})

        const currentProperties = json.properties || {}
        json = {
          ...json,
          properties: {
            ...currentProperties,
            ...extraProperties,
          },
        }
      }

      const example = readParameterFromJsonFile({
        basePath: parameterJsonFolderPath,
        parameterName: 'example',
      })
      if (example) {
        json = {
          ...json,
          example,
        }
      }

      return json
    }
  }

  return null
}
