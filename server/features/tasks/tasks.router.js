const express = require("express");
const { append } = require("express/lib/response");
const TasksModel = require("./tasks.model");

const tasksRouter =express.Router()

// RESTful API
// CRUD (Create Reade Update Delete)

// Read (HTTP - GET)
// Read all tasks
tasksRouter.get('/', async (req, res) =>{
    const tasks = await TasksModel.findAll()
    res.send(tasks)
})

tasksRouter.post('/', async (rec, res) =>{
    const newTask = req.body
    const taskFromDb = await TasksModel.create(newTask)
    res.send(taskFromDb)
})


//экспортируем данные из js модуля(файла)
module.exports = tasksRouter 