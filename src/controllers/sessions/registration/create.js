const User = require('../../../models/user')
const { validationResult } = require('express-validator')

async function createRegistration(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({
            message: 'Validation failed',
            errors: errors.errors
        })
    }

    const { email, password } = req.body
    const user = new User({ email: email, password: password })
    await user.save()

    res.cookie('user_id', user._id)
    res.cookie('user_email', user.email)

    res.redirect('/tasks')
}

module.exports = { createRegistration }
