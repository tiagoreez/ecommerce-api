const { Sequelize } = require('sequelize')
const config = require('../config/config')
const { setUpModels } = require('../db/models/index')

const URI = config.dbUri

const sequelize = new Sequelize(URI, {

  dialect: config.dbEngine,
  logging: true

})

setUpModels(sequelize)

module.exports = sequelize
