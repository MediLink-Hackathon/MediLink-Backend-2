const { Model, DataTypes } = require("sequelize");
const {sequelize} = requie('../util/database')

class User extends Model{}
User.init({
        User_ID:{
            type:DataTypes.STRING,
            primaryKey:true,
            allowNull:false,
        },
        User_Email:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        User_DisplayName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        User_Password:{
            type:DataTypes.STRING,
            allowNull:false
        },
        User_FirstName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        User_LastName:{
            type:DataTypes.STRING, 
            allowNull:false
        },
    
        User_CreateionDate:{
            type:DataTypes.DATE,
            allowNull:false
        },
        User_Phone:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },
    {
        sequelize,
        timestamps:false,
        modelName: "user"
    }
)

module.exports = User