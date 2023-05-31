const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const dotenv = require('dotenv')
const cors = require('@koa/cors');

const apiRouter = require('./routes/api.routes')

dotenv.config()

const app = new Koa()

app.use(cors());


app.use(bodyParser())

app.use(apiRouter.routes())



module.exports = {app}