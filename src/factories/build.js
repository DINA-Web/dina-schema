const fs = require('fs')
const path = require('path')

console.log('start create specification')
const { models, openApi, swagger } = require('./index')

fs.writeFileSync(
  path.join(__dirname, '../../build', 'openApi.json'),
  JSON.stringify(openApi, null, 2)
)

fs.writeFileSync(
  path.join(__dirname, '../../build', 'models.json'),
  JSON.stringify(models, null, 2)
)

fs.writeFileSync(
  path.join(__dirname, '../../build', 'swagger.json'),
  JSON.stringify(swagger, null, 2)
)
