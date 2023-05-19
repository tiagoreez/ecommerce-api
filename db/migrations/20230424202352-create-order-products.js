'use strict'

const { ORDER_PRODUCT_TABLE, orderProductsSchema } = require('../models/order-products_model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(ORDER_PRODUCT_TABLE, orderProductsSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(ORDER_PRODUCT_TABLE)
  }
}
