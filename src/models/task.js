const { Schema, model } = require('mongoose')

const Task = new Schema({
    title: {
        type: String,
        require: true
    },
    comlited: {
        type: Boolean,
        default: false
    }
})

module.exports = model('task', Task)
