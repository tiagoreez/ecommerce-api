const { faker } = require('@faker-js/faker')
const boom = require('@hapi/boom')
const { models } = require('../libs/sequelize')

class ProductService {
  async generate () {
    const limit = 100
    const products = []
    for (let index = 0; index < limit; index++) {
      const product = await models.Product.create({
        name: faker.commerce.department(),
        price: Math.round(faker.commerce.price()),
        img: faker.image.imageUrl(),
        categoryId: 1
      })

      products.push(product)
    }
    return products
  }

  async get () {
    const products = await models.Product.findAll({ include: ['category'] })
    return products
  }

  async getOne (id) {
    const product = await models.Product.findByPk(id, { include: ['category'] })
    if (!product) {
      throw boom.notFound()
    }
    return product
  }

  async create (data) {
    const newProduct = await models.Product.create(data)
    return newProduct
  }

  async update (id, body) {
    const productToUpdate = this.getOne(id)
    const updatedProduct = await productToUpdate.update(body)
    return updatedProduct
  }

  async delete (id) {
    const productToDelete = await this.getOne(id)
    await productToDelete.destroy()
    return id
  }
}

module.exports = ProductService
