const {Model, DataTypes} = require('sequelize') 
const {sequelize} = require('../utils/database')

class FinancialTransaction extends Model{}
FinancialTransaction.init({
    idTransaction:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    Amount:{
        type:DataTypes.DECIMAL(11,2),
        allowNull:false
    },
    Transaction_Date:{
        type:DataTypes.DATE,
        allowNull:false
    }
},
{
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'financial_transaction'
}
)


module.exports = FinancialTransaction