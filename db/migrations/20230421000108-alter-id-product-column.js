'use strict'

const { PRODUCTS_TABLE, productsSchema } = require('../models/products_model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(PRODUCTS_TABLE, productsSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(PRODUCTS_TABLE)
  }
}
