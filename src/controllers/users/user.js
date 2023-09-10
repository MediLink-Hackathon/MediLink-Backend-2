const express = require("express")
const userRoute = express.Router()
const bcrypt = require('bcrypt')

userRoute.get("/", (req, res) => {
    


})

userRoute.post("/", async (req, res) => {
    const {email, username, password, first_name, last_name, phone} = req.body
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds)

    res.send('User Created')
})

module.exports = userRoute