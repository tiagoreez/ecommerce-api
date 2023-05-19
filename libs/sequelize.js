const { Sequelize } = require('sequelize')
const config = require('../config/config')
const { setUpModels } = require('../db/models/index')

const URI = `${config.dbEngine}://${config.dbUser}:${config.dbPassword}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelize = new Sequelize(URI, {

  dialect: config.dbEngine,
  logging: true

})

setUpModels(sequelize)

module.exports = sequelize
