
const boom = require('@hapi/boom')
const { models } = require('../libs/sequelize')
const bcrypt = require('bcrypt')
class customersService {
  async get () {
    const users = await models.Customer.findAll({
      include: ['user']
    })
    return users
  }

  async getOne (id) {
    const customer = await models.Customer.findByPk(id, {
      include: ['user']
    })
    if (!customer) {
      throw boom.notFound()
    }

    return customer
  }

  async post (body) {
    const hash = await bcrypt.hash(body.user.password, 10)
    const newData = {
      ...body,
      user: {
        ...body.user,
        password: hash
      }
    }
    const newCustomer = await models.Customer.create(newData, { include: ['user'] })
    delete newCustomer.dataValues.user.dataValues.password
    return newCustomer
  }

  async update (id, body) {
    const customer = await this.getOne(id)
    const newCustomer = await customer.update(body)
    return newCustomer
  }

  async delete (id) {
    const customer = await this.getOne(id)
    await customer.destroy()
    return (id)
  }
}

module.exports = customersService
