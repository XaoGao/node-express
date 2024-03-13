const Router = require('express')
const router = new Router()
const { check } = require('express-validator')
const { indexTasks } = require('../controllers/tasks')
const { createTask } = require('../controllers/tasks/create')
const { deleteTask } = require('../controllers/tasks/delete')

router.get('/', indexTasks)

router.post('/',
    [
        check('title', 'Title is required').notEmpty()
    ],
    createTask
)

router.delete('/:taskId', deleteTask)

module.exports = router
