const User = require('../../Database/Models/User')   
   
module.exports.register = async (req,res)  => {
        const { login , password } = req.body
        const createUser = await User.create({
                login,
                password})
                .then( res.send(`createUser`))
}                
                
                
                
                
               
     