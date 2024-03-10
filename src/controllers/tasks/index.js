const path = require('path')
const Task = require("../../models/task")
const logger = require('../../utils/logger')

async function indexTasks(req, res) {
    try {
        const tasks = await Task.find({}).exec()
        res.render(path.join(__dirname, '..', '..', 'views', 'tasks', 'index.pug'), {
            tasks: tasks
        })
    }
    catch (e) {
        logger.error(e)
        res.status(500).json({ message: 'Server error' })
    }
}

module.exports = { indexTasks }
