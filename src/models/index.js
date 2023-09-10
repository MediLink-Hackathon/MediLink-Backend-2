const User = require('./user')
const Psychologist = require('./psychologist')
const Patient = require('./patient')
const Volunteer = require('./volunteer')

//Create tables matching model schema
User.sync()
Psychologist.sync()
Patient.sync()
Volunteer.sync()



module.exports = {User, Psychologist}