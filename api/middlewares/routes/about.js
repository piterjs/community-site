const Router = require('koa-router')
const mockedDatabase = require('../../mocks/database.dev')

const router = new Router()

router
  .get('/about', function (ctx, next) {
    ctx.body = mockedDatabase.about
    next()
  })

module.exports = router
