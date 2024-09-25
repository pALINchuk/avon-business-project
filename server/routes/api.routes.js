const Router = require('@koa/router')
const {postApiSendMail} = require("../api/api");


const router = new Router({
    prefix: '/api'
})

router.post('/sendMail',postApiSendMail)

router.get('/',async ctx=>{
    ctx.body="Koa API"
})

module.exports = router