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
        
        if(login && password) {
                const findUser = await User.findAll({
                        where: {
                                login,
                                password
                        }
                })

                if(findUser.length > 0 )  res.json(findUser)
                else
                res.json('Nao existem usuarios com esse login e senha')
                
        } 
        else { res.json('Usuario ou senha nao podem ser nulos')}
                  
      
}


                
module.exports = {userRegister,userLogin}        
               
     