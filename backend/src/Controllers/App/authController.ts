const User = require('../../Database/Models/User')   
   
const userRegister = async (req,res)  => {
        const { login , password } = req.body
        const createUser = await User.create({
                login,
                password})
                .then( res.send(`createUser`))
}                
                



                
module.exports = {userRegister}        
               
     