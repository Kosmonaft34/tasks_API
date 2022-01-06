import { TaskDto } from "./tasks.dto";
import TasksModel from "./tasks.model";

export async function getAllTasksService(){
    return TasksModel.findAll()
    
}

export default async function createTaskService(newTask: TaskDto) {
    const taskFromDb = await TasksModel.create(newTask)
    return taskFromDb
}