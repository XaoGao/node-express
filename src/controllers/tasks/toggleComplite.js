const Task = require("../../models/task");

async function toggleComplit(request, response) {
    const task = await Task.findById(request.params.taskId)
    if (!task) {
        return response.status(400).json({ message: 'Task not found' })
    }
    task.complited = !task.complited
    await task.save()
    response.status(200).json({ complited: task.complited })
}

module.exports = { toggleComplit }
