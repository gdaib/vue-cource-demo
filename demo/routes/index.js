const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get("/getUserInfo", async (ctx, next) => {
  ctx.body = {
    name: 'cjfff',
    age: 18
  }
});


router.post('/getUserInfo', async (ctx, next) => {
  console.log(ctx.request.body);
  ctx.body = {
    code: 0,
    data: {

    }
  }
})

module.exports = router
