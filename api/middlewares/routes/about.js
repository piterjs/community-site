const Router = require('koa-router')
const router = new Router()

router
  .get('/about', function (ctx, next) {
    ctx.body = {
      title: 'Информация о сообществе',
      text: 'Произвольный текст'
    }

    next()
  })

module.exports = router
