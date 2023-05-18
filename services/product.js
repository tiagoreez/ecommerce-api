const { faker } = require('@faker-js/faker')
const boom = require('@hapi/boom')
const {models} = require('../libs/sequelize')
 

/**
 *  name: name.required(),
    price: price.required(),
    img : img
 */

class ProductService {
  constructor () {
  
  }

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

  async create (data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct)
    return newProduct
  }

  async get () {
    const products = await models.Product.findAll()
    return products
  }

  async getOne (id) { 
    const product = this.products.find(item => item.id === id)
    if(!product){
      throw boom.notFound('Product not found')
    }else if(!product.isDisplayed){

      throw boom.conflict("The users can't see this product ")

    }

    return product
    
  }

  async update (id, body) {
    const index = this.products.findIndex(item => item.id === id)
    if (index === -1) {
      throw boom.notFound('Product Not found')
    }
    const product = this.products[index]
    this.products[index] = {
      ...product,
      ...body
    }
    return this.products[index]
  }

  async delete (id) {
    const index = this.products.findIndex(item => item.id === id)
    console.log(index)
    if (index === -1) {
      throw boom.notFound('Product Not found')
    }
    this.products.splice(index, 1)
    return { id }
  }
}

module.exports = ProductService
