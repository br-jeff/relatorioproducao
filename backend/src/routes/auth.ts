const router =  require('express').Router()
const rootController = require('../controllers/root')
const Users = require('../Database/Models/User')

    router.post('/register',
     (req,res) => rootController.stored(req,res) ) 

     router.get('/login',
     (req,res) => rootController.index(req,res) ) 

     
module.exports =  router  