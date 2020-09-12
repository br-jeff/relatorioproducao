const User = require('../../Database/Models/User')   
   
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


                
module.exports = {userRegister,userLogin}        
               
     