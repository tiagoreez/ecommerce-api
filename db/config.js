const config = require('../config/config')

const URI = `${config.dbEngine}://${config.dbUser}:${config.dbPassword}@${config.dbHost}:${config.dbPort}/${config.dbName}`

module.exports = {

  development: {
    url: URI,
    dialect: config.dbEngine
  },
  production: {
    url: URI,
    dialect: config.dbEngine
  }

}
