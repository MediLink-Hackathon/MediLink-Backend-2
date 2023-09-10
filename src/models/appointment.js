const {Model, DataTypes} = require('sequelize') 
const {sequelize} = require('../utils/database')

class Appointment extends Model{}
Appointment.init({
    idAppointment:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        autoIncrement:true
    }
},
{
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'appointment'
})

module.exports = Appointment