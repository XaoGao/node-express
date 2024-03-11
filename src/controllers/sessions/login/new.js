const path = require('path')
const logger = require('../../../utils/logger')

async function newLogin(req, res) {
    try {
        res.render(path.join(__dirname, '..', '..', '..', 'views', 'sessions', 'login.pug'))
    }
    catch (e) {
        logger.error(e)
        res.status(500).json({ message: 'Server error' })
    }
}

module.exports = { newLogin }