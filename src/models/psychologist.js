const {Model, DataTypes} = require('sequelize')
const {sequelize} = require('../utils/database')

class Psychologist extends Model{}
Psychologist.init({
    idPsychologist:{
        type:DataTypes.STRING,
        primaryKey:true
    },
    City: {
        type:DataTypes.STRING,
        allowNull:false
    },
    Psychologist_Status: {
        type:DataTypes.INTEGER,
        allowNull:false
    },
    Date_of_Birth: {
        type:DataTypes.DATE,
        allowNull:false
    },
    Specialty: {
        type:DataTypes.STRING,
        allowNull:false
    },
    License_Number: {
        type:DataTypes.STRING,
        allowNull: false
    },
    Practicing_Since: {
        type:DataTypes.DATE,
        allowNull:false
    },
    Psychologist_Membership:{
        type:DataTypes.STRING,
        allowNull:false
    },
    Fee:{
        type:DataTypes.STRING,
        allowNull: false
    },
    External_Reviews:{
        type:DataTypes.INTEGER,
        allowNull: true
    }
    
},
{
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'psychologist'
}
)

module.exports = Psychologist