const User = require('./user')
const Psychologist = require('./psychologist')
const Patient = require('./patient')
const Volunteer = require('./volunteer')
const SupportMessage = require('./support_message')

//Create tables matching model schema
User.sync()
Psychologist.sync()
Patient.sync()
Volunteer.sync()
SupportMessage.sync()




module.exports = {
    User, 
    Psychologist, 
    Patient, 
    Volunteer,
    SupportMessage

}