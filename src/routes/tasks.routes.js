const Router = require('express')
const router = new Router()
const { check } = require('express-validator')
const { indexTasks } = require('../controllers/tasks')
const { createTask } = require('../controllers/tasks/create')

router.get('/', indexTasks)

router.post('/',
    [
        check('title', 'Title is required').notEmpty()
    ],
    createTask
)

module.exports = router
