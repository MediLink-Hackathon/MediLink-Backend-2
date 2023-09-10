const {Model,DataTypes} = require('sequelize')
const {sequelize} = require('../utils/database')

class Volunteer extends Model{}
Volunteer.init({
    idVolunteer:{
        type:DataTypes.STRING,
        primaryKey:true
    },
    firstName:{
        type:DataTypes.STRING,
        allowNull:true
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:true
    }
},
{
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'volunteer'
}
)

module.exports = Volunteer