const express = require('express')
const productsRouter = require('./products.js')
const categoriesRouter = require('./categories')
const usersRouter = require('./users')
const customerRouter = require('./customers.js')
const orderRouter = require('./orders.js')

function routerApi (app) {
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/products', productsRouter)
  router.use('/categories', categoriesRouter)
  router.use('/users', usersRouter)
  router.use('/customers', customerRouter)
  router.use('/orders', orderRouter)
}

module.exports = routerApi
