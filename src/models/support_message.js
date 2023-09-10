const {Model, DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')

class SupportMessage extends Model{}
SupportMessage.init({
    idMessage:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    Content:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports = SupportMessage
