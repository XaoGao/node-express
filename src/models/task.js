const { Schema, model } = require('mongoose')

const Task = new Schema({
    title: {
        type: String,
        require: true
    },
    complited: {
        type: Boolean,
        default: false
    }
})

module.exports = model('task', Task)
