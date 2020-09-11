const dbConfig = require('../Config/configDB')
const Sequelize = require('sequelize')
const sequelize = new Sequelize(dbConfig)

const Users = sequelize.define('Users', {

    nrecno: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,

    },
    login:{
        type: Sequelize.STRING,
    },
    password:{
        type: Sequelize.STRING,
    },
},
{tableName: 'NODE_APP_USERS'} )

Users.sync()

module.exports = Users;