const express = require('express')

const app = express()


//Static File Serving
app.use(express.static('public'))
app.use(express.json())


//Routers
//TODO: Add routers here

module.exports = app
