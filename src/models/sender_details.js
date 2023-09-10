const {Model, DataTypes} = require('sequelize') 
const {sequelize} = require('../utils/database')


class SenderDetails extends Model{}
SenderDetails.init({
    senderId:{
        type:DataTypes.STRING,
        primaryKey:true
    },
    firstName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:false
    }

},
{
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'sender_details'
})

module.exports = SenderDetails