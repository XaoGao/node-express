const logger = require('../../../utils/logger')

async function createLogin(req, res) {
    try {
        // TODO: implement method
    }
    catch (e) {
        logger.error(e)
        res.status(500).json({ message: 'Server error' })
    }
}

module.exports = { createLogin }