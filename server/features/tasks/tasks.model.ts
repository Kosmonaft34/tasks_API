import { Model, DataTypes } from "sequelize";
import sequelize from "../../db";

export default class TasksModel extends Model{}

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
    sequelize,
    tableName: 'Task'
})

