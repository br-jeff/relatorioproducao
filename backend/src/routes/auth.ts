const router =  require('express').Router()
const rootController = require('../controllers/root')

    router.post('/register',
     (req,res) => rootController.stored(req,res) ) 

     router.get('/login',
     (req,res) => rootController.index(req,res) ) 

     
module.exports =  router  