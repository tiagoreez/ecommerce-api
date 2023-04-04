const { faker } = require('@faker-js/faker')
const boom = require('@hapi/boom')

class ProductService {
  constructor () {
    this.products = []
    this.generate()
  }

  async generate () {
    const limit = 10
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        img: faker.image.imageUrl(),
        isDisplayed: faker.datatype.boolean()
      })
    }
  }

  async create (data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct)
    return newProduct
  }

  get () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products)
      }, 5000)
    })
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
