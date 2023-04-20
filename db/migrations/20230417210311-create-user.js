'use strict';


const {UserSchema,USER_TABLE} = require('./../models/user_model')
const {productsSchema,PRODUCTS_TABLE} = require('./../models/products_model')
const {categoriesSchema,CATEGORY_TABLE} = require('./../models/category_model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable(USER_TABLE, UserSchema)
    await queryInterface.createTable(PRODUCTS_TABLE, productsSchema)
    await queryInterface.createTable(CATEGORY_TABLE, categoriesSchema)

  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable(USER_TABLE)
    await queryInterface.dropTable(PRODUCTS_TABLE)
    await queryInterface.dropTable(CATEGORY_TABLE)

  }
};
