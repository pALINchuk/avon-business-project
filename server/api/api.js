const {getTransporter} = require("../utils/mailing");
const {db} = require("../models");


const sendMail = async (data)=>{
    return await getTransporter().sendMail({
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
        subject: "Form filled",
        text: JSON.stringify(data)
    })
}


const postApiSendMail = async ctx =>{
    const data = ctx.request.body
    try{ //sending email here
        await sendMail(data)

        // console.log(data)
        ctx.response.status = 200
        ctx.response.message="OK"
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
}


module.exports = {postApiSendMail}