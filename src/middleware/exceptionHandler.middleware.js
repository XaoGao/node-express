const logger = require('../utils/logger')

module.exports = (error, req, res, next) => {
    logger.error(error)
    res.status(500).send('Server error')
    next(error)
}
