'use strict'

const { UserSchema, USER_TABLE } = require('./../models/user_model')
const { productsSchema, PRODUCTS_TABLE } = require('./../models/products_model')
const { categoriesSchema, CATEGORY_TABLE } = require('./../models/category_model')
const { ORDER_TABLE, orderSchema } = require('../models/order_model')
const { ORDER_PRODUCT_TABLE, orderProductsSchema } = require('../models/order-products_model')
const { CUSTOMER_TABLE, customerSchema } = require('../models/customers_model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(USER_TABLE, UserSchema)
    await queryInterface.createTable(CATEGORY_TABLE, categoriesSchema)
    await queryInterface.createTable(PRODUCTS_TABLE, productsSchema)
    await queryInterface.createTable(CUSTOMER_TABLE, customerSchema)
    await queryInterface.createTable(ORDER_TABLE, orderSchema)
    await queryInterface.createTable(ORDER_PRODUCT_TABLE, orderProductsSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(USER_TABLE)
    await queryInterface.dropTable(PRODUCTS_TABLE)
    await queryInterface.dropTable(CATEGORY_TABLE)
    await queryInterface.dropTable(ORDER_TABLE)
    await queryInterface.dropTable(ORDER_PRODUCT_TABLE)
    await queryInterface.dropTable(CUSTOMER_TABLE)
  }
}
