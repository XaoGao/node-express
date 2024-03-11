const express = require('express')
const path = require('path')

const tasksRoute = require('./routes/tasks.routes')
const sessionsRoute = require('./routes/sessions.routes')

const app = express()

app.use(express.static('public'))
app.use(express.json())

app.set('view engine', 'pug')
app.set('views', path.resolve(__dirname, 'src', 'views'))

app.use('/tasks', tasksRoute)
app.use('/', sessionsRoute)

module.exports = app
