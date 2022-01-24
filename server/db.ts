import { Sequelize } from "sequelize"; // подключаем Sequelize const Sequelize = require('sequelize');

//переменные окружения из файла .env
const dbHost = process.env.DB_HOST || 'localhost'
const dbPort = process.env.DB_PORT || '3306'

const dbName = process.env.DB_NAME || 'tasks_db'
const dbUser = process.env.DB_USER || 'tasks_user'
const dbPassword = process.env.DB_PASS || 'user123456'

//создаём объект подключения к БД Sequelize
export const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  port: +dbPort,
  dialect: 'mysql'
});

//экспортируем по умолчанию
export default sequelize                