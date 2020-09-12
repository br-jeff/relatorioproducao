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
        res.send('Login page')
}

const createToken = (id) => { 
        return jwt.sing({ id },'segredo hash' )
}

                
module.exports = {userRegister,userLogin}        
               
     