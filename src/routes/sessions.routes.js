const Router = require('express')
const router = new Router()
const { check } = require('express-validator')
const { newLogin } = require('../controllers/sessions/login/new')
const { createLogin } = require('../controllers/sessions/login/create')
const { newRegistration } = require('../controllers/sessions/registration/new')
const { createRegistration } = require('../controllers/sessions/registration/create')
const { deleteLogin } = require('../controllers/sessions/login/delete')

router.get('/login', newLogin)
router.post('/login',
    [
        check('email', 'Email is required').notEmpty(),
        check('email', 'Email is not valid').isEmail(),
        check('password', 'Password is required').notEmpty()
    ], createLogin)

router.get('/registration', newRegistration)
router.post('/registration',
    [
        check('email', 'Email is required').notEmpty(),
        check('email', 'Email is not valid').isEmail(),
        check('password', 'Password is required').notEmpty()
    ], createRegistration)

router.delete('/logout', deleteLogin)

module.exports = router
