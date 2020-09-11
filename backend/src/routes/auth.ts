const router =  require('express').Router()
const Users = require('../Database/Models/User')
const register = require('../Controllers/App/register')

    router.post('/register',
        (req,res) => register(req,res) ) 

     router.get('/login',
         (req,res) => rootController.index(req,res) ) 

     
module.exports =  router  