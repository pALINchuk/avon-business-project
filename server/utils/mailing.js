const {createTransport} = require("nodemailer");

const getTransporter = ()=> createTransport({
    service: "gmail",
    auth:{
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD
    },
    tls : { rejectUnauthorized: false }
})

module.exports = {getTransporter}