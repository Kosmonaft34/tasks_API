import express from "express";
import { validator } from "sequelize/dist/lib/utils/validator-extras";
import { TasksController } from "./tasks.controller";
import TasksModel from "./tasks.model";                                 //подключаем модель 
import { createTaskValidator, IdValidator } from "./tasks.validator";

const tasksRouter =express.Router()    

// RESTful API
// CRUD (Create Reade Update Delete)

// Read (HTTP - GET)
// Read all tasks
tasksRouter.get('/', TasksController.getAllTasks)

// Read one tasks
tasksRouter.get('/:id', IdValidator, TasksController.getTask)

//Create task
tasksRouter.post('/', createTaskValidator, TasksController.createTask)

//Delete task
tasksRouter.delete('/:id/delete', TasksController.deleteTask)

//Update task
tasksRouter.patch('/:id/update', TasksController.updateTask)


//экспортируем данные из js модуля(файла)
export default tasksRouter 