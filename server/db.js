const { Sequelize } = require("sequelize");

const dbHost = process.env.HOST
const dbPoRt = process.env.PORT

const dbName = process.env.DB_NAME
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    port: dbPoRt,
    dialect: 'mysql'
  });

  module.exports = sequelize