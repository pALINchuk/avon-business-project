const client = (sequelize, DataTypes) =>{
    return sequelize.define("clients", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            },
            allowNull: false,
            primaryKey: true
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}


module.exports = {client}