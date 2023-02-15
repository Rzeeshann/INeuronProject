const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const User = sequelize.define('users',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
    },
    emailid:{
        type: Sequelize.STRING,
    },
    number:{
        type:Sequelize.STRING,
    }
})

module.exports = User