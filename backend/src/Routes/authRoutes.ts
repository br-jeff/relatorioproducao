const router =  require('express').Router()
const auth = require('../Controllers/App/authController')

    router.post('/register', auth.register ) 

     
module.exports =  router ; 