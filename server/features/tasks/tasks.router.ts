import express from "express";
import { createTask, getAllTasks } from "./tasks.controller";
import TasksModel from "./tasks.model";

const tasksRouter =express.Router()

// RESTful API
// CRUD (Create Reade Update Delete)

// Read (HTTP - GET)
// Read all tasks
tasksRouter.get('/', getAllTasks)

tasksRouter.post('/', createTask)


//экспортируем данные из js модуля(файла)
export default tasksRouter 