const User = require('./user')
const Psychologist = require('./psychologist')
const Patient = require('./patient')
const Volunteer = require('./volunteer')
const SupportMessage = require('./support_message')
const FinancialTransaction = require('./financial_transaction')
const Funding = require('./funding')
const Distributor = require('./distributor')

//Set up associations

//User->Patient 1:N
User.hasMany(Psychologist)
Psychologist.belongsTo(User)

//User->Psychologist 1:1
User.hasOne(Psychologist)
Psychologist.belongsTo(User)


//Setup link beween FinancialTransaction and User, 
//TODO:

FinancialTransaction.hasMany(Funding)
Funding.belongsTo(FinancialTransaction)

FinancialTransaction.hasMany(Distributor)
Distributor.belongsTo(FinancialTransaction)


User.hasMany(FinancialTransaction, {as: 'idReceiver'})
FinancialTransaction.belongsTo(User)

Volunteer.hasMany(FinancialTransaction)
FinancialTransaction.belongsTo(Volunteer)
//------------------
SupportMessage.hasMany(Funding)
Funding.belongsTo(SupportMessage)

const forceUpdate = true;
//Create tables matching model schema

Volunteer.sync({alter:true, force:forceUpdate})
Funding.sync({alter:true, force:forceUpdate})
Distributor.sync({alter:true, force:forceUpdate})
FinancialTransaction.sync({alter:true, force:forceUpdate})
User.sync({alter:true, force:forceUpdate})
Psychologist.sync({alter:true, force:forceUpdate})
SupportMessage.sync({alter:true, force:forceUpdate})
Patient.sync({alter:true, force:forceUpdate})


module.exports = {
    User, 
    Psychologist, 
    Patient, 
    Volunteer,
    SupportMessage,
    FinancialTransaction,
    Funding,
    Distributor
}