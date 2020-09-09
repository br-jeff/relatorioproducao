const  Sequelize  = require('sequelize'); 
const configdb = require('./configdb')

const connection = new Sequelize(configdb);


module.exports =  connection