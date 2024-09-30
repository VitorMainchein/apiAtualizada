require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const rotas_produtos = require('./rotas/rotas-produto')
const clientes = require('./rotas/rotas-clientes')
const rotas_autentificacao = require('./rotas/rotas-autenticacao')
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./docs/documentacao.yaml')
const cookieParser = require('cookie-parser')

app.use(bodyParser.json())
app.use(cookieParser())

app.use('/produtos', rotas_produtos)
app.use('/clientes', clientes)
app.use('/auth', rotas_autentificacao)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))


app.listen(8000)

module.exports = app;