const logger = require('../utils/logger')

module.exports = async (req, res, next) => {
    logger.info(`${req.method} ${req.url} ${req.body}`)
    await next()
}
