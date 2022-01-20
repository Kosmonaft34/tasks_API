import { Request, Response } from "express"
import decoratedController, { controller } from "../../services/decorators"
import { HttpError } from "../../services/http -error"
import { TaskDto } from "./tasks.dto"
import TasksModel from "./tasks.model"
import { delTaskService, getAllTasksService, getTaskService, updateTaskService } from "./tasks.service"

export const TasksController =  controller({

    async getAllTasks(req, res) {
        const tasks = await getAllTasksService()
        res.send(tasks)
    },

    async getTask(req, res) {
        const id = req.params.id
        const task = await getTaskService(+id)
        res.send(task)
    },

    async createTask(req, res) {
        const newTask: TaskDto = req.body
        const taskFromDb = await TasksModel.create(newTask)
        res.send(taskFromDb)
    },

    async deleteTask(req, res) {
        const id = +req.params.id
        const result = await delTaskService(id)
        res.send(result)
    },
    async updateTask(req, res) {
        const updatedTask = req.body //read date
        const id = +req.params.id //search task for id
        const upTask = await updateTaskService(id, updatedTask)
        res.send(upTask)
    },
})



//  async function getAllTasks(req: Request, res: Response) {
//     const tasks = await getAllTasksService()
//     res.send(tasks)

// }

//  async function getTask(req: Request, res: Response) {
//     const id = req.params.id
//     const task = await getTaskService(+id)
//     res.send(task)
// }

// export async function createTask(req: Request, res: Response) {
//     const newTask: TaskDto = req.body
//     const taskFromDb = await TasksModel.create(newTask)
//     res.send(taskFromDb)
// }

// export const deleteTask = decoratedController(async function (req: Request, res: Response) {
//     const id = +req.params.id
//     const result = await delTaskService(id)
//     res.send(result)
// })
// export async function updateTask(req: Request, res: Response) {
//     const updatedTask = req.body //read date
//     const id = +req.params.id //search task for id
//     const upTask = await updateTaskService(id, updatedTask)
//     res.send(upTask)
// }