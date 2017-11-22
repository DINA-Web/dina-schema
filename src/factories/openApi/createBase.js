const path = require('path')
const fs = require('fs')
const serverMap = require('../../specification/servers')

module.exports = function createBase(config, packageJson) {
  const descriptionPath = path.join(
    __dirname,
    '../',
    '../',
    'specification',
    'description.md'
  )

  const servers = Object.keys(serverMap).map(key => {
    return serverMap[key]
  })

  const base = Object.assign(
    {
      openapi: '3.0.0',
      servers,
    },
    config
  )
  const description = fs.readFileSync(descriptionPath, 'utf8')
  base.info.description = description
  base.info.version = packageJson.version
  return base
}
