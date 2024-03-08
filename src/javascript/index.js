import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"
import './styles/main.scss'
import "bootstrap"

window.Stimulus = Application.start()
const context = require.context("./controllers", true, /\.js$/)
Stimulus.load(definitionsFromContext(context))
