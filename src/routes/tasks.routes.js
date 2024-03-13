const Router = require('express')
const router = new Router()
const { check } = require('express-validator')
const { indexTasks } = require('../controllers/tasks')
const { createTask } = require('../controllers/tasks/create')
const { deleteTask } = require('../controllers/tasks/delete')
const { toggleComplit } = require('../controllers/tasks/toggleComplite')

router.get('/', indexTasks)

router.post('/',
    [
        check('title', 'Title is required').notEmpty()
    ],
    createTask
)

router.delete('/:taskId', deleteTask)
router.put('/:taskId', toggleComplit)

module.exports = router
