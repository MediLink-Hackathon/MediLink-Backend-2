const express = require("express")
const userRoute = express.Router()
const bcrypt = require('bcrypt')
const { Snowflake } = require('nodejs-snowflake');
const {User} = require('../../models')


userRoute.get("/", async (req, res) => {
    const users = await User.findAll();
    res.json(users)
    return;
})

userRoute.post("/", async (req, res) => {
    try{
        // Initialize snowflake
        var snowflake = new Snowflake()
        const passwordHash = await bcrypt.hash(req.body.password, 10)
        const user = await User.create({
            ...req.body, 
            userId: snowflake.getUniqueID(),
            password: passwordHash
        })
        res.json(user);
    }catch(ex){
        console.log(ex)
        res.status(400).json({error:ex})
    }
})

module.exports = userRoute