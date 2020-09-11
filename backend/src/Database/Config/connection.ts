const Sequelize  = require('sequelize'); 
const configdb = require('./configDB')

const connection = new Sequelize(configdb);

module.exports =  connection