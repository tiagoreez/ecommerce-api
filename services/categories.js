const boom = require('@hapi/boom')
const { models } = require('../libs/sequelize')

class CategoryServices {
  async get () {
    const categories = await models.Category.findAll()
    return categories
  }

  async getOne (id) {
    const category = await models.Category.findByPk(id)
    if (!category) {
      throw boom.notFound()
    }
    return category
  }

  async post (data) {
    const category = models.Category.create(data)
    return category
  }

  async update (id, body) {
    const category = await this.getOne(id)
    if (!category) {
      throw boom.notFound
    }
    const newCategory = await category.update(body)
    return newCategory
  }

  async delete (id) {
    const category = await this.getOne(id)
    await category.destroy()
    return id
  }
}

module.exports = { CategoryServices }
