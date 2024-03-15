const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser");

const tasksRoute = require('./routes/tasks.routes')
const sessionsRoute = require('./routes/sessions.routes')
const loggerMiddleware = require('./middleware/logger.middleware')
const { userMiddleware } = require('./middleware/user.middleware');

const app = express()

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser())

app.set('view engine', 'pug')
app.set('views', path.resolve(__dirname, 'src', 'views'))

app.use(loggerMiddleware)
app.use(userMiddleware)

app.use('/tasks', tasksRoute)
app.use('/', sessionsRoute)

module.exports = app
