const {Model, DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')

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
})

module.exports = Distributor