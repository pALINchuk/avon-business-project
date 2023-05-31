const {Sequelize, DataTypes} = require('sequelize')
const {client} = require("./models");
const config = require("../config/dbConfig")

const sequelize = new Sequelize(
    config.db_name,
    config.db_user,
    config.db_password,
    {
        host: config.db_host,
        dialect: 'mysql'
    }
)


sequelize.authenticate()
    .then(()=>{
        console.log("database connected")
    })
    .catch(err=>{
        console.log(err)
    }
)


const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize


db.client = client(db.sequelize, DataTypes)


db.sequelize.sync({force: false})
    .then(()=>{
        console.log("re-sync done")
    }
)

module.exports = {db}