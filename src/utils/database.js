const tedious = require('tedious')
const Sequelize = require('sequelize')
const DB_CONFIG = require('../config/database.config')



const sequelize = new Sequelize(
    
    DB_CONFIG.DATABACE_INSTANCE,
    DB_CONFIG.DATABASE_USER,
    DB_CONFIG.DATABASE_PASSWORD,{
        dialect:'mssql',
        logging: true,
        host: DB_CONFIG.DATABASE_HOST,
        dialectModule: tedious,
        dialectOptions:{
            options: {
                encrypt: true,
                
            }
        }

    }
    
)


const connectToDatabase = async () => {
    try{
        await sequelize.authenticate()
        console.log('Connection has been established successfully.');
    }catch(err){
        console.log('Failed to connecto to the database:', err)
        return process.exit(1)
    }
    return null
}

module.exports = {connectToDatabase, sequelize}