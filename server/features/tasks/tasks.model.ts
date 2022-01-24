import { Model, DataTypes } from "sequelize"; 
import sequelize from "../../db";

export default class TasksModel extends Model{}  //создаём модель

//инициализируем поля модели(отношения)
TasksModel.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
    },
    done: {
        type: DataTypes.BOOLEAN
    }
}, {
    //передаём объект sequelize,чтобы модель знала как подключаться к БД 
    sequelize,              
    tableName: 'Task'
})

