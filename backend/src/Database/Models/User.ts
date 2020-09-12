const { Sequelize, DataTypes } = require('sequelize');
const configDB = require('../Config/configDB')
const sequelize = new Sequelize(configDB)

const User = sequelize.define('User', {
    
    login: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},

{ tableName: 'NODE_APP_USUARIO' })

User.sync()

module.exports = User;
