const path = require('path')
const Task = require("../../models/task")
const { validationResult } = require('express-validator')
const logger = require('../../utils/logger')

async function createTask(req, res) {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: 'Validation failed',
                errors: errors
            })
        }

        res.status(200).json({
            message: 'Task created'
        })
    }
    catch (e) {
        logger.error(e)
        res.status(500).json({ message: 'Server error' })
    }
}

module.exports = { createTask }