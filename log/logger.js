'use strict';

const { createLogger, format, transports } = require('winston');

const env = process.env.NODE_ENV || 'development';
const fse = require('fs-extra')
const path = require('path');
const logDir = 'logs';
const filename = path.join(logDir, 'results.log');
fse.outputFile(filename,'', err => void{});



const logger = createLogger({
  // change level if in dev environment versus production
  level: env === 'production' ? 'info' : 'debug',
  format: format.combine(
    format.label({ label: path.basename(process.mainModule.filename) }),
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' })
  ),
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(
          info =>
            `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`
        )
      )
    }),
    new transports.File({
      filename,
      format: format.combine(
        format.printf(
          info =>
            `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`
        )
        //,format.json()
      )
    })
  ]
});

module.exports = logger;