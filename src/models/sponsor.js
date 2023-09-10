const {Model, DataTypes} = require('sequelize') 
const {sequelize} = require('../utils/database')

class Sponsor extends Model{}
Sponsor.init({
    idTransaction:{
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
    },
    amount:{
        type:DataTypes.STRING,
        allowNull:false
    },
    transactionDate:{
        type:DataTypes.DATE,
        allowNull:false
    }
},
{
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'sponsor'
}
)


module.exports = Sponsor