const { Schema, model } = require('mongoose')

const Task = new Schema({
    title: {
        type: String,
        require: true
    },
    complited: {
        type: Boolean,
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

module.exports = model('task', Task)
