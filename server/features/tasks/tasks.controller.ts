import { Request, Response } from "express"
import { TaskDto } from "./tasks.dto"
import TasksModel from "./tasks.model"
import { getAllTasksService } from "./tasks.service"

export async function getAllTasks(req: Request,res: Response){
    const tasks = await getAllTasksService()
    res.send(tasks)

}

export async function createTask(req: Request,res: Response){
    const newTask: TaskDto = req.body
    const taskFromDb = await TasksModel.create(newTask)
    res.send(taskFromDb)
}