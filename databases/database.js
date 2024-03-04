const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('hello_schema', 'root', 'password', 
{
    dialect: 'mysql',
    host: "localhost"
})

module.exports= sequelize;
