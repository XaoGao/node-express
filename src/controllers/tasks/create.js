const path = require('path')
const Task = require("../../models/task")
const { validationResult } = require('express-validator')
const logger = require('../../utils/logger')
const pug = require('pug')

async function createTask(request, response) {
    try {
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
    } catch (error) {
        logger.error(error)
        response.status(500).json({ message: 'Server error' })
    }
}

module.exports = { createTask }