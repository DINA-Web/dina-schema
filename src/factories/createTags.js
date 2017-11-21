const path = require('path')
const fs = require('fs')

module.exports = function createDefinitions() {
  const tagsPath = path.join(__dirname, '../', 'specification', 'tags')
  const files = fs.readdirSync(tagsPath)
  return files.reduce((tags, fileName) => {
    const fullPath = path.join(tagsPath, fileName)
    const definition = require(path.join(tagsPath, fileName))
    if (fs.lstatSync(fullPath).isDirectory()) {
      const descriptionFile = path.join(fullPath, 'description.md')
      if (fs.existsSync(descriptionFile)) {
        definition.description = fs.readFileSync(descriptionFile, 'utf8')
      }
    }

    tags.push(definition)
    return tags
  }, [])
}
