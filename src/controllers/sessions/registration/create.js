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

    const user = await User.findOne({ email: req.body.email })
    if (user) {
        return res.status(400).send('User already exists')
    }

    const { email, password } = req.body
    const newUser = new User({ email: email, password: password })
    await newUser.save()

    res.cookie('user_id', newUser._id)
    res.cookie('user_email', newUser.email)

    res.redirect('/tasks')
}

module.exports = { createRegistration }
