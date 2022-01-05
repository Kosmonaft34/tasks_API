const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../db");

class TasksModel extends Model{}

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

module.exports = TasksModel