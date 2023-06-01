const {Sequelize, DataTypes} = require('sequelize')
const {client} = require("./models");


const db = {}

const initDB = ()=>{
    const sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: process.env.DB_HOST,
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

    db.Sequelize = Sequelize
    db.sequelize = sequelize


    db.client = client(db.sequelize, DataTypes)


    db.sequelize.sync({force: false})
        .then(()=>{
                console.log("re-sync done")
            }
        )
}


module.exports = {db, initDB}