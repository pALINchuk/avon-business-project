const {getTransporter} = require("../utils/mailing");
const {db} = require("../models");
const {generateMessage} = require("../utils/generateMessage");


const sendMail = async (text)=>{
    return await getTransporter().sendMail({
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
        subject: "Form filled",
        text: text
    })
}


const postApiSendMail = async ctx =>{
    const data = ctx.request.body
    try{ //sending email here
        const message = generateMessage(data)
        await sendMail(message)
        ctx.response.status = 200
        ctx.response.message="OK"
    }catch (error){
        console.log(error)
        ctx.response.status = 500
        ctx.response.message="SERVER ERROR"
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
        ctx.response.status = 500
        ctx.response.message="SERVER ERROR"
    }
}


module.exports = {postApiSendMail}