
const { Schema, model } = require('mongoose')

const User = new Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
        require: true
    },
    updatedAt: {
        type: Date,
        default: Date.now,
        require: true
    }
})

User.methods.validPassword = function(password) {
    return this.password === password
}

module.exports = model('user', User)
