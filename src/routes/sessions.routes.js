const Router = require('express')
const router = new Router()
const { check } = require('express-validator')
const { newLogin } = require('../controllers/sessions/login/new')
const { createLogin } = require('../controllers/sessions/login/create')
const { newRegistration } = require('../controllers/sessions/registration/new')
const { createRegistration } = require('../controllers/sessions/registration/create')

router.get('/login', newLogin)
router.post('/login', createLogin)

router.get('/registration', newRegistration)
router.post('/registration',
    [
        check('email', 'Email is required').notEmpty(),
        check('email', 'Email is not valid').isEmail(),
        check('password', 'Password is required').notEmpty()
    ], createRegistration)

module.exports = router
