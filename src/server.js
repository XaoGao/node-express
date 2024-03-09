const express = require('express')
const path = require('path')

const tasksRoute = require('./routes/tasks.routes')

const app = express()

app.use(express.static('public'))
app.set('view engine', 'pug')
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.use('/tasks', tasksRoute)

module.exports = app
