const Task = require("../../models/task");

async function deleteTask(request, response) {
    const task = await Task.findById(request.params.taskId)
    if (!task) {
        return response.status(404).json({})
    }
    await Task.findByIdAndDelete(request.params.taskId).exec()
    response.status(200).json({})
}

module.exports = { deleteTask }
