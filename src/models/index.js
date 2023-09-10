const Appointment = require('./appointment')
const Campaign = require('./campaign')
const Sponsor = require('./sponsor')
const SenderDetails = require('./sender_details')
const User = require('./user')
const { sequelize } = require('../utils/database')


Campaign.hasMany(Appointment)
Appointment.belongsTo(Campaign)


Campaign.belongsTo(User, {as: 'doctor'})
Campaign.belongsTo(User, {as: 'patient'})
User.hasMany(Campaign, {foreignKey: 'doctorId', as: 'assignedDoctorCampaign'})
User.hasMany(Campaign, {foreignKey: 'patiendId', as: 'pacientHasCampaign'})


sequelize.sync({force:true})

module.exports = {User, Campaign, Appointment, Sponsor, SenderDetails}