const express = require("express")
const userRoute = express.Router()
const bcrypt = require('bcrypt')


const {User} = require('../../models')


userRoute.get("/", async (req, res) => {
    const users = await User.findAll();
    res.json(users)
})

userRoute.post("/", async (req, res) => {
    const {email, username, password, first_name, last_name, phone} = req.body
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds)

    res.send('User Created')
})

module.exports = userRoute