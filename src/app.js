const express = require('express')

const app = express()
const requestLogger = require('./middlewares/request_logger')
const errorHandler  = require('./middlewares/error_handler')
const unknownEndpoint = require('./middlewares/unknown_endpoint')

//Midldeware
app.use(requestLogger)
app.use(errorHandler)
app.use(unknownEndpoint)
app.use(express.json())

//Static File Serving
app.use(express.static('public'))




//Routers
//TODO: Add routers here

module.exports = app
