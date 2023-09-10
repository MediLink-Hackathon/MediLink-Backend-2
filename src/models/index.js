const User = require('./user')
const Psychologist = require('./psychologist')
const Patient = require('./patient')
const Volunteer = require('./volunteer')
const SupportMessage = require('./support_message')
const FinancialTransaction = require('./financial_transaction')
const Funding = require('./funding')
const Distributor = require('./distributor')

//Set up associations

/*
//User->Patient 1:N
User.hasMany(Psychologist)
Psychologist.belongsTo(User)

//User->Psychologist 1:1
User.hasOne(Psychologist)
Psychologist.belongsTo(User)


//Setup link beween FinancialTransaction and User, 
//TODO:

//FinancialTransaction.hasMany(Funding)
//Funding.belongsTo(FinancialTransaction)

FinancialTransaction.hasMany(Distributor)
Distributor.belongsTo(FinancialTransaction)


User.hasMany(FinancialTransaction, {as: 'idReceiver'})
FinancialTransaction.belongsTo(User)

Volunteer.hasMany(FinancialTransaction)
FinancialTransaction.belongsTo(Volunteer)
//------------------
SupportMessage.hasMany(Funding)
Funding.belongsTo(SupportMessage)
*/


//REDO

User.hasMany(Psychologist)
Psychologist.belongsTo(User)
User.hasMany(Patient)
Patient.belongsTo(User)


SupportMessage.hasMany(Funding)
Funding.belongsTo(SupportMessage)

//FinancialTransacionId appeears as a foreign key in Funding and Volunteer
//FinancialTransaction.hasMany(Funding)
//Funding.belongsTo(FinancialTransaction)

//FinancialTransaction.hasMany(Volunteer)
//Volunteer.belongsTo(FinancialTransaction)

//AccountId appears as a FK in FinancialTransaction and Distributor
/*User.hasMany(FinancialTransaction, { as: 'FinancialTransactions' });
FinancialTransaction.belongsTo(User);

Distributor.hasMany(FinancialTransaction, { as: 'FinancialTransactions' });
FinancialTransaction.belongsTo(Distributor);*/

//Financial Rewrite
Funding.belongsToMany(FinancialTransaction, {through: FinancialTransaction})
Volunteer.belongsToMany(FinancialTransaction, {through: FinancialTransaction})
/*User.hasMany(FinancialTransaction);
FinancialTransaction.belongsTo(User);
Distributor.hasMany(FinancialTransaction);
FinancialTransaction.belongsTo(Distributor);*/



const forceUpdate = true;
//Create tables matching model schema

User.sync({force:forceUpdate})
Psychologist.sync({force:forceUpdate})
Patient.sync({force:forceUpdate})
SupportMessage.sync({force:forceUpdate})
Distributor.sync({force:forceUpdate})
Volunteer.sync({force:forceUpdate})
FinancialTransaction.sync({force:forceUpdate})
Funding.sync({force:forceUpdate})

/*
*/

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