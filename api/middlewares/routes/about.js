const Router = require('koa-router')
const mockedDatabase = require('../../mocks/database.dev')

const router = new Router()

router
  .get('/api/about', (ctx, next) => {
    ctx.body = mockedDatabase.about
    next()
  })

module.exports = router
