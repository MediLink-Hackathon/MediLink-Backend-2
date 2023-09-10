const express = require("express")
const campaignRoute = express.Router()
const tokenExtractor = require('../../utils/token_extractor')


const {Campaign, User} = require('../../models')


campaignRoute.get("/", tokenExtractor, async (req, res) => {
    try{
        const user = await User.findByPk(req.decodedToken.id)
        const campaigns = await user.findAll({
            where:{
                'patient': req.decodedToken.id
            },
    })
    }catch(error){

    }
})

campaignRoute.post("/", async (req, res) => {
    
})

module.exports = campaignRoute