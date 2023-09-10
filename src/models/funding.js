const {Model, DataTypes} = require('sequelize')
const {sequelize} = require('../utils/database')

class Funding extends Model{}
Funding.init({
    idFunding:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    
    
},
{
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'funding'
}
)


module.exports = Funding