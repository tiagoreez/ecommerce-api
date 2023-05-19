const Joi = require('joi')

const name = Joi.string().min(3).max(20)
const price = Joi.number().integer().min(10)
const id = Joi.number().integer()
const img = Joi.string().uri()

const getProductSchema = Joi.object({

  id: id.required()
})

const updateProductSchema = Joi.object({

  id,
  name,
  price,
  img

})

const postProductSchema = Joi.object({

  name: name.required(),
  price: price.required(),
  img

})

const deleteProductSchema = Joi.object({

  id: id.required()

})

module.exports = { getProductSchema, updateProductSchema, postProductSchema, deleteProductSchema }
