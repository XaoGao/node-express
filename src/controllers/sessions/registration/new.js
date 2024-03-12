const path = require('path')

async function newRegistration(req, res) {
    res.render(path.join(__dirname, '..', '..', '..', 'views', 'sessions', 'registration.pug'))
}

module.exports = { newRegistration }
