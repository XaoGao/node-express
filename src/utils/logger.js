const winston = require('winston')

const logger = winston.createLogger({
    transports: [
      new winston.transports.Console(
        {
          level: 'info',
          format: winston.format.simple(),
          colrize: true,
          timestamp: true,
          handleExceptions: true
        }
      )
    ]
  });

module.exports = logger
