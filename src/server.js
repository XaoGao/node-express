const express = require('express')
const path = require('path')

const webpackMiddleware = require("webpack-dev-middleware");
const webpackConfig = require("./webpack.config");

const tasksRoute = require('./routes/tasks.routes')

const app = express()

app.use(express.static('public'))
app.set('view engine', 'pug')
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.use(webpackMiddleware(webpack(webpackConfig)));
app.use('/tasks', tasksRoute)

module.exports = app
