const User = require('../../../models/user')
const { validationResult } = require('express-validator')

async function createLogin(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({
            message: 'Validation failed',
            errors: errors.errors
        })
    }

    const { email, password } = req.body
    const user = await User.findOne({ email: email})
    if (!user) {
        return res.status(400).send('Incorrect email or password')
    }

    if (!user.validPassword(password)) {
        return res.status(400).send('Incorrect email or password')
    }

    res.cookie('user_id', user._id)
    res.cookie('user_email', user.email)

    res.redirect('/tasks')
}

module.exports = { createLogin }