const fs = require('fs')
const path = require('path')

console.log('start create specification')
const buildSwaggerSpecification = require('./factories/swagger')
const buildOpenApiSpecification = require('./factories/openApi')
const buildModels = require('./factories/models')

const swaggerSpecification = buildSwaggerSpecification()
const openApiSpecification = buildOpenApiSpecification()

const models = buildModels()

fs.writeFileSync(
  path.join(__dirname, '../build', 'swagger.json'),
  JSON.stringify(swaggerSpecification, null, 2)
)

fs.writeFileSync(
  path.join(__dirname, '../build', 'openApi.json'),
  JSON.stringify(openApiSpecification, null, 2)
)

fs.writeFileSync(
  path.join(__dirname, '../build', 'models.json'),
  JSON.stringify(models, null, 2)
)
console.log('specification done')
