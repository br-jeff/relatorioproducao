const router =  require('express').Router()
const { userRegister } = require('../Controllers/App/authController')

    router.post('/register', userRegister ) 

module.exports =  router ; 