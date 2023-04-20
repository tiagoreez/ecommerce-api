'use strict';
const { PRODUCTS_TABLE, productsSchema }= require('../models/products_model')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(PRODUCTS_TABLE, 'categoryId',  productsSchema.categoryId)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(PRODUCTS_TABLE)
  }
};
