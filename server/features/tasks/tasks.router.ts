import express from "express";
import { validator } from "sequelize/dist/lib/utils/validator-extras";
import { createTask, deleteTask, getAllTasks, getTask, updateTask } from "./tasks.controller";
import TasksModel from "./tasks.model";
import { createTaskValidator, IdValidator } from "./tasks.validator";

const tasksRouter =express.Router()

// RESTful API
// CRUD (Create Reade Update Delete)

// Read (HTTP - GET)
// Read all tasks
tasksRouter.get('/', getAllTasks)

// Read one tasks
tasksRouter.get('/:id', IdValidator, getTask)

//Create task
tasksRouter.post('/', createTaskValidator, createTask)

//Delete task
tasksRouter.delete('/:id/delete', deleteTask)

//Update task
tasksRouter.patch('/:id/update', updateTask)


//экспортируем данные из js модуля(файла)
export default tasksRouter 