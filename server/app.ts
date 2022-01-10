require('dotenv').config()
import express, { ErrorRequestHandler } from 'express'
import {sequelize} from './db'
import tasksRouter from './features/tasks/tasks.router'
const app = express()
const port = process.env.PORT || 3000 

app.use('/api', express.json())

app.use('/api/tasks', tasksRouter)

app.use(express.static('./client'))

const expressErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
    res.status(err.statusCode).send(err.message)
}



async function start(): Promise<void>{
    try {
        await sequelize.authenticate();
        await sequelize.sync()
        console.log('Successful db sync');
        app.listen(port)
    } catch (error) {
        console.error(error);
    }
}

start()