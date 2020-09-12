const { Op } = require("sequelize")
const User = require('../../Database/Models/User')   
const jwt = require('jsonwebtoken')
   
const userRegister = async (req,res) => {
        const { login , password } = req.body
        const createUser = await User.create({
                login,
                password})
                .then( res.send(`createUser`))
}                
                
const userLogin = async (req,res) => {

        const { login , password } = req.body
       
        const findUser = await User.findAll()
        res.json(findUser)
}


                
module.exports = {userRegister,userLogin}        
               
     