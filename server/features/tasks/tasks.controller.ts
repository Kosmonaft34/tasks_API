import { Request, Response } from "express"
import { HttpError } from "../../services/http -error"
import { TaskDto } from "./tasks.dto"
import TasksModel from "./tasks.model"
import { delTaskService, getAllTasksService, getTaskService, updateTaskService } from "./tasks.service"

export async function getAllTasks(req: Request,res: Response){
    const tasks = await getAllTasksService()
    res.send(tasks)

}

export async function getTask(req:Request, res: Response) {
    const id = req.params.id
    const task = await getTaskService(+id)
    res.send(task)
}

export async function createTask(req: Request,res: Response){
    const newTask: TaskDto = req.body
    const taskFromDb = await TasksModel.create(newTask)
    res.send(taskFromDb)
}

export async function deleteTask(req: Request, res: Response) {
    const id = +req.params.id
    try {
        const result =  await delTaskService(id)
        res.send(result)
    } catch (error) {
        const err = error as HttpError
        res.status(err.statusCode).send(err.message)
    }
    
   
}

export async function updateTask(req:Request, res: Response) {
    const updatedTask = req.body //read date
    const id = +req.params.id //search task for id
    const upTask = await updateTaskService(id, updatedTask)
   res.send(upTask)
}