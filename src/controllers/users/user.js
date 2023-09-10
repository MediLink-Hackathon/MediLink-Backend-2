const express = require("express")
const userRoute = express.Router()
const bcrypt = require('bcrypt')


const {User} = require('../../models')


userRoute.get("/", async (req, res) => {
    const users = await User.findAll();
    res.json(users)
    return;
})

userRoute.post("/", async (req, res) => {
    try{
        const user = await User.create(req.body)
        res.json(user);
    }catch(error){
        res.status(400).json({error})
    }
})

module.exports = userRoute