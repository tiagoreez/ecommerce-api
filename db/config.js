const config = require('../config/config')

const URI = config.dbUri

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
