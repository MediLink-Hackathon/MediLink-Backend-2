const {Model, DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')

class Funding extends Model{}
Funding.init({
    idFunding:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },


})


module.exports = Funding