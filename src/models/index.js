const Psychologist = require('./psychologist')
const User = require('./user')

//Create tables matching model schema
User.sync()
Psychologist.sync()


module.exports = {User, Psychologist}