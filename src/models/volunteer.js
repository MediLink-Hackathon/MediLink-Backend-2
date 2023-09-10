const {Model,DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')

class Volunteer extends Model{}
Volunteer.init({
    idVolunteer:{primaryKey:true},
    firstName:{
        type:DataTypes.STRING,
        allowNull:true
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:true
    }
})

module.exports = Volunteer