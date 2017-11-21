const path = require('path')
const fs = require('fs')

module.exports = function createBase(config) {
  const descriptionPath = path.join(
    __dirname,
    '../',
    'specification',
    'description.md'
  )

  const base = config
  const description = fs.readFileSync(descriptionPath, 'utf8')

  base.info.description = description
  return base
}
