const Router = require('koa-router')
const router = new Router({
  prefix: '/api'
})
const about = require('./about')

const routersMap = {
  'about': about.routes(),
  'calendar': 'not implemented'
}

router
  .all('/', (cxt, next) => {
    cxt.body = Object.keys(routersMap)
    next()
  })
  .use('/about', about.routes(), about.allowedMethods())

module.exports = router
