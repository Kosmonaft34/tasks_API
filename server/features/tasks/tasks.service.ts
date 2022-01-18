import { where } from "sequelize/dist";
import { httpError } from "../../services/http -error";
import { TaskDto } from "./tasks.dto";
import TasksModel from "./tasks.model";

export async function getAllTasksService(){
    return TasksModel.findAll()
    
}

export default async function createTaskService(newTask: TaskDto) {
    const taskFromDb = await TasksModel.create(newTask)
    return taskFromDb
}

export async function getTaskService(id: number)  {
    const task = await TasksModel.findByPk(id)
    return task
}

export async function delTaskService(id:number) {
    let result;
    // try {
       result = await TasksModel.destroy({where:{id: id}})
    // } catch (error) {
    //     const err = error as Error
    //     throw httpError(400, err.message)
    // }
    if (result === 1) {
        return{ success: true}
    } else
    
    throw httpError(404, 'Nothing to delete')
}

export async function updateTaskService(id: number, updatedTask: TaskDto) {
    const updated = await TasksModel.update(updatedTask,{
         where: {
            id: id
              }
        });
        return getTaskService(id)
}