const Koa = require('koa')
const router = require('koa-router')()
const config = require('./config')
const routesAll = require('./middlewares/routes/about')
const errorHandler = require('./middlewares/error')

const app = new Koa()

app.use(errorHandler)
app.use(routesAll.routes(), router.allowedMethods())

app.use(async function (ctx, next) {
  const start = new Date()
  await next()
  const ms = new Date() - start
  ctx.set('X-Response-Time', `${ms}ms`)
  console.log(`${ctx.method} ${ctx.url} – ${ms} ms`)
})


app.listen(config.API_PORT)
