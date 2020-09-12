const router =  require('express').Router()
const register = require('../Controllers/App/register')

    router.post('/register',
        (req,res) => register(req,res) ) 


module.exports =  router ; 