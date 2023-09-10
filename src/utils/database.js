const Sequelize = require('sequelize')
const {DB_HOST} = require('../config/database').DB_HOST

const sequelize = new Sequelize(DB_HOST)

const connectToDatabase = async () => {
    try{
        const sequelize = new Sequelize(DATABASE_URL)
        await sequelize.authenticate()
        console.log('Connection has been established successfully.');
    }catch(err){
        console.log('Failed to connecto to the database')
        return process.exit(1)
    }
    return null
}

module.exports = {connectToDatabase, sequelize}