const path = require('path')
const fs = require('fs')

module.exports = function createBase(config, packageJson) {
  const descriptionPath = path.join(
    __dirname,
    '../',
    '../',
    'specification',
    'description.md'
  )

  const base = config
  const description = fs.readFileSync(descriptionPath, 'utf8')

  base.swagger = '2.0'
  base.host = 'alpha-api-docs.dina-web.net'
  base.basePath = '/collections/api/v01/'
  base.schemes = ['http']

  base.info.description = description
  base.info.version = packageJson.version
  return base
}
