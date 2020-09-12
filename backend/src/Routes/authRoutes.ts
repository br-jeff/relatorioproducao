const router =  require('express').Router()
const { registerUser } = require('../Controllers/App/authController')

    router.post('/register', registerUser ) 

module.exports =  router ; 