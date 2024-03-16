const path = require('path')

async function newLogin(req, res) {
    res.render(path.join(__dirname, '..', '..', '..', 'views', 'sessions', 'login.pug'))
}

module.exports = { newLogin }
