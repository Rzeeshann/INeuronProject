const Sequelize = require('sequelize')

const sequelize = new Sequelize('hackathon','root','zeeshansk',{
    dialect:'mysql',
    host:'localhost'
})
module.exports = sequelize