const {Model, DataTypes} = require('sequelize') 
const {sequelize} = require('../utils/database')

class Campaign extends Model{}
Campaign.init({
    balance:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING,
        alooNull:true
    }
},{
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'campaign'
})

module.exports = Campaign