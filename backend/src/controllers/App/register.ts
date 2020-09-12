const User = require('../../Database/Models/User')

async function register(req,res) {
        const {login,password } = req.body

        const createUser = User.create({
                login,
                password })
                .then( res.json(createUser))
                
}

module.exports = register