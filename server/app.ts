require('dotenv').config()                              //подключаем файл .env,чтобы считать его он его записывает в process.env. и через него мы можем с .env считать все переменные
import express, { ErrorRequestHandler } from 'express'  //подключаем express
import { sequelize } from './db'                        //подключаем sequelize из нашего файла db.ts
import tasksRouter from './features/tasks/tasks.router' //подключаем router(который подключает модель)
const app = express()
const port = process.env.PORT || 3000                   //через process.env. можем считать в переменную

//midlleware парсим body,который приходит от пользователя.Когда ползователь делает запрос на сервер,то он будет присылать body(данные)
//данные будут приходить в формате json,в req.body
app.use('/api', express.json())   

app.use('/api/tasks', tasksRouter)                      //подключаем router

app.use(express.static('./client'))                     //подключаем staticserver

const expressErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
    res.status(err.statusCode).send(err.message)
}


//асинхронная функция подключения к серверу
async function start(): Promise<void> {
    try {
        await sequelize.authenticate();   //пробуем аутентифицироваться по логину паролю
        await sequelize.sync()            //синхронизируем модели,который находятся в модели sequelize,tableName: 'Task'-это сообщает sequlize о том,что создана модель и данные должны записаться в БД
        console.log('Successful db sync');//если всё работает,то выводим сообщение в терминал 'Successful db sync'
        app.listen(port)
    } catch (error) {
        console.error(error);
    }
}

start()