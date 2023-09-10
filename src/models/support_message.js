const {Model, DataTypes} = require('sequelize')
const {sequelize} = require('../utils/database')

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
},
{
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'support_message'
}
)

module.exports = SupportMessage
