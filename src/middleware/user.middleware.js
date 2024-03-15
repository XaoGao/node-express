const User = require("../models/user")

async function userMiddleware(req, res, next) {
    const user = await User.findOne({ email: req.cookies.user_email })
    if (!user) {
        res.locals.currentUser = {
            email: 'guest',
            signedIn: false
        }
        return next()
    }
    res.locals.currentUser = {
        email: user.email,
        signedIn: true
    }
    next()
}

module.exports = { userMiddleware }
