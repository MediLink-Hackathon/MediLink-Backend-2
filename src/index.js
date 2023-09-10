require('dotenv').config()

const app = require('./app')
const config =  require('./config/server')
const {connectToDatabase} = require('./utils/database')

const start = async () => {
    await connectToDatabase()
    app.listen(config.PORT, () => {
        console.log(`Server running on port ${config.PORT}`)
    })
}

start()