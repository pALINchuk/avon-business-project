const Router = require('@koa/router')
const {sendMail} = require("../api/api");

const {db} = require('../models')

const router = new Router({
    prefix: '/api'
})

router.post('/',async ctx=>{
    const data = ctx.request.body
    try{ //sending email here
        await sendMail(data)

        // console.log(data)
        ctx.response.status = 200
        ctx.response.message="sent"
    }catch (error){
        console.log(error)
    }

    try{ // saving to db here
        await db.client.create({
            firstName: data.name,
            lastName: data.surname,
            email: data.email,
            phoneNumber: data.phone
        });

        ctx.response.status = 200
        ctx.response.message="sent"
    }catch (error){
        console.log(error)
    }

})

router.get('/',async ctx=>{
    ctx.body="Koa API"
})

module.exports = router