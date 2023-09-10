const User = require('./user')
const Psychologist = require('./psychologist')
const Patient = require('./patient')
const Volunteer = require('./volunteer')
const SupportMessage = require('./support_message')
const FinancialTransaction = require('./financial_transaction')
const Funding = require('./funding')
const Distributor = require('./distributor')

//Create tables matching model schema
User.sync()
Psychologist.sync()
Patient.sync()
Volunteer.sync()
SupportMessage.sync()
FinancialTransaction.sync()
Funding.sync()
Distributor.sync()


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