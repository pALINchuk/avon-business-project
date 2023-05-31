const {getTransporter} = require("../utils/mailing");


const sendMail = async (data)=>{
    return await getTransporter().sendMail({
        from: process.env.GMAIL_USER,
        to: "avonprojectemail@gmail.com",
        subject: "Form filled",
        text: JSON.stringify(data)
    })
}


module.exports = {sendMail}