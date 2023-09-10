const {Model, DataTypes} = require('sequelize')
const {sequelize} = require('../utils/database')

class Patient extends Model{}
Patient.init({
    idPatient:{
        type:DataTypes.STRING,
        primaryKey: true
    },
    Credit:{
        type:DataTypes.DECIMAL(11,2),
        allowNull: false
    },
    About_Me:{
        type:DataTypes.STRING(1000),
        allowNull: false,
    },
    Patient_Status:{
        type:DataTypes.INTEGER,
        allowNull: true
    },
    Appointment_Review:{
        type:DataTypes.INTEGER,
        allowNull: true
    }
    
},
{
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'patient'
}
)

module.exports = Patient