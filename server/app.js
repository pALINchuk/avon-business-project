const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const dotenv = require('dotenv')
const cors = require('@koa/cors');
const logger = require('koa-logger')

const apiRouter = require('./routes/api.routes')
const {initDB} = require("./models");

dotenv.config()

const app = new Koa()

app.use(cors());
app.use(bodyParser())
app.use(logger())

initDB()


app.use(apiRouter.routes())



module.exports = {app}