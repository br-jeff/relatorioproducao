const router =  require('express').Router()
const { userRegister,userLogin } = require('../Controllers/App/authController')

    router.post('/register', userRegister ) 
    router.post('/login',userLogin)

module.exports =  router ; 