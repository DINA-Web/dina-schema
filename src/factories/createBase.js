const path = require('path')
const fs = require('fs')

module.exports = function createBase(config, packageJson) {
  const descriptionPath = path.join(
    __dirname,
    '../',
    'specification',
    'description.md'
  )

  const base = config
  const description = fs.readFileSync(descriptionPath, 'utf8')

  base.info.description = description
  base.info.version = packageJson.version
  return base
}
