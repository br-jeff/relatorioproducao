const router =  require('express').Router()
const Users = require('../Database/Models/User')
const login = require('../Controllers/RP/login')

    router.post('/register',
        (req,res) => login(req,res) ) 

     router.get('/login',
         (req,res) => rootController.index(req,res) ) 

     
module.exports =  router  