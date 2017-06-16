const Koa = require('koa')
const config = require('./config')
const routesAll = require('./middlewares/routes')
const errorHandler = require('./middlewares/error')


const app = new Koa()

app.use(routesAll.routes(), routesAll.allowedMethods())
app.use(errorHandler)

app.listen(config.API_PORT)
