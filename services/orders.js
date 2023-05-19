const boom = require('@hapi/boom')
const { models } = require('../libs/sequelize')

class OrderService {
  async get () {
    const orders = await models.Order.findAll()
    return orders
  }

  async getOne (id) {
    try {
      const order = await models.Order.findByPk(id, {
        include: [{
          association: 'customer',
          include: 'user'
        },
        'items'
        ]
      })
      return order
    } catch (error) {
      throw boom.notFound(error)
    }
  }

  async post (data) {
    const newOrder = await models.Order.create(data)
    return newOrder
  }

  async addItem (data) {
    const newItem = await models.OrderProduct.create(data)
    return newItem
  }
}

module.exports = OrderService
