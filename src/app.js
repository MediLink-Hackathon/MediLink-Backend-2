const express = require('express')
const userRouter = require('./controllers/users/user')


const app = express()
const requestLogger = require('./middlewares/request_logger')
const errorHandler  = require('./middlewares/error_handler')
const unknownEndpoint = require('./middlewares/unknown_endpoint')

//Midldeware
app.use(express.json())
app.use(requestLogger)
app.use(errorHandler)

//Static File Serving
app.use(express.static('public'))




//Routers
app.use('/api/signup/', userRouter)
app.use(unknownEndpoint)


//TODO: Add routers here

module.exports = app
