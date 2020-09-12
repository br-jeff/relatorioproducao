const router =  require('express').Router()
const  { register } = require('../Controllers/App/userAccess')

    router.post('/register',
        (req,res) => register(req,res) ) 

    
     
module.exports =  router ; 