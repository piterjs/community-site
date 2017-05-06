const Koa = require('koa')
const config = require('./config')

const app = new Koa()

app.use(ctx => {
  ctx.body = 'Piter JS'
})

app.listen(config.API_PORT)
