const {Model, DataTypes} = require('sequelize')
const {sequelize} = require('../utils/database')

class Distributor extends Model{}
Distributor.init({
    idDistributor:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    CurrentBalance:{
        type:DataTypes.DECIMAL(11,2),
        allowNull:false
    }
},
{
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'distributor'
}

)

module.exports = Distributor