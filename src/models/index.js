const User = require('./user')
const Psychologist = require('./psychologist')
const Patient = require('./patient')

//Create tables matching model schema
User.sync()
Psychologist.sync()
Patient.sync()


module.exports = {User, Psychologist}