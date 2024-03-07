const config = require('config')
const mongoose = require('mongoose')
const port = config.get('server.port')

const app = require('./server')

const start = async () => {
    try {
        await mongoose.connect(config.get('db.uri'))
        app.listen(port, () => {
            console.log(`Server started on port ${port}...`)
        })
    }
    catch (e) {
        console.error(e)
    }
}

start()