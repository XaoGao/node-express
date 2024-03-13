const Task = require("../../models/task");

async function deleteTask(request, response) {
    await Task.findByIdAndDelete(request.params.taskId).exec()
    response.status(200).json({})
}

module.exports = { deleteTask }
