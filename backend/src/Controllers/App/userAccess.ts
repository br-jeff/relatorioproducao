const User = require('../../Database/Models/User')


        const register = async (req,res) => {
                const {login,password } = req.body

                const createUser = User.create({
                        login,
                        password})
                        .then( res.send(`createUser`))
                        
        }

        const login = async (req,res) => {
                res.send('teste')
        }
     
        module.exports =  { register , login }  