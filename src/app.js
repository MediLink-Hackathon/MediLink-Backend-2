const express = require('express')

const app = express()
const requestLogger = require('./middlewares/request_logger')


//Static File Serving
app.use(express.static('public'))
app.use(express.json())


//Midldeware
app.use(requestLogger)


//Routers
//TODO: Add routers here

module.exports = app
