const router =  require('express').Router()
const rootController = require('../controllers/root')

    router.get('/1',
     (req,res) => rootController.stored(req,res) ) 

     router.get('/2',
     (req,res) => rootController.index(req,res) ) 

     
module.exports =  router 