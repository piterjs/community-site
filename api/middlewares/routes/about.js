const Router = require('koa-router')
const mockedDatabase = require('../../mocks/database.dev')

const router = new Router()

router
  .get('/', (ctx, next) => {
    ctx.body = mockedDatabase.about
    next()
  })
  .get('/:id', (ctx, next) => {
    ctx.body = mockedDatabase.about[parseInt(ctx.params.id, 10) - 1]
    next()
  })

module.exports = router
