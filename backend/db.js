const {Sequelize} = require('sequelize')



module.exports = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_LOGIN,
    process.env.DB_PASSWORD,
{
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
}
)


