const path = require('path')
const Task = require("../../models/task")
const { validationResult } = require('express-validator')
const pug = require('pug')

async function createTask(request, response) {
    const errors = validationResult(request)
    if (!errors.isEmpty()) {
        return response.status(400).json({
            message: 'Validation failed',
            errors: errors.errors
        })
    }

    const count = Task.countDocuments().exec()

    const task = new Task({ title: request.body.title })
    await task.save();

    // TODO: check why task row is empty 
    const taskRow = pug.renderFile(
        path.join(__dirname, '..', '..', 'views', 'tasks', 'taskRow.pug'),
        { count, task }
    )

    response.status(200).json({ task, taskRow })
}

module.exports = { createTask }