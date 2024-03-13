const Task = require("../../models/task");

async function toggleComplit(request, response) {
    const task = await Task.findById(request.params.taskId)
    task.complited = !task.complited
    await task.save()
    response.status(200).json({ complited: task.complited })
}

module.exports = { toggleComplit }
