const path = require('path')
const Task = require("../../models/task")

async function indexTasks(req, res) {
    const tasks = await Task.find({}).exec()
    res.render(path.join(__dirname, '..', '..', 'views', 'tasks', 'index.pug'), {
        tasks: tasks
    })
}

module.exports = { indexTasks }
