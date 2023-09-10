const {Model,DataTypes} = require('sequelize')
const {sequelize} = require('../utils/database')

class User extends Model{}
User.init({
        userId:{
            type:DataTypes.STRING,
            primaryKey:true,
            allowNull:false,
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        displayName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        },
        firstName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        lastName:{
            type:DataTypes.STRING, 
            allowNull:false
        },

        creationDate:{
            type:DataTypes.DATE,
            allowNull:false
        },
        phone:{
            type:DataTypes.STRING,
            allowNull:false
        },
        type:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },
    {
        sequelize,
        timestamps:false,
        modelName: "user"
    })

module.exports = User;