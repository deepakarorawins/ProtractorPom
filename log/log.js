var winston = require('winston');

//winston.remove(winston.transports.Console);
//winston.add(winston.transports.Console, {timestamp: true});
winston.add(new winston.transports.File({ filename: 'combined.log' }));

module.exports = winston;