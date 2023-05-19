
const boom = require('@hapi/boom')
const bcrypt = require('bcrypt')
const { models } = require('../libs/sequelize')

class Users {
  async get () {
    const response = await models.User.findAll({
      include: ['customer']

    })
    return response
  }

  async getOne (id) {
    const user = await models.User.findByPk(id)
    if (!user) {
      throw boom.notFound('User not found')
    }
    return user
  }

  async post (body) {
    const hash = await bcrypt.hash(body.password, 10)
    console.log('Aqui voy')
    const newUser = await models.User.create({
      ...body,
      password: hash
    })
    delete newUser.dataValues.password
    return newUser
  }

  async patch (id, body) {
    const user = await this.getOne(id)
    const rta = user.update(body)
    return rta
  }

  async delete (id) {
    const user = await this.getOne(id)
    await user.destroy()
    return { id }
  }
}

module.exports = Users
