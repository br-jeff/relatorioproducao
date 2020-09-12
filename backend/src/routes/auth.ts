const router =  require('express').Router()
const  { register, login } = require('../Controllers/App/userAccess')

    router.post('/register',
        (req,res) => register(req,res) ) 

    router.post('/login',
    (req,res) => login(req,res))
     
module.exports =  router ; 