const Joi = require('joi')

const name = Joi.string()
const id = Joi.number().integer()

const getCategorySchema = Joi.object({

  id: id.required()

})

const postCategorySchema = Joi.object({

  name: name.required()

})

const patchCategorySchema = Joi.object({

  id,
  name

})

module.exports = { getCategorySchema, postCategorySchema, patchCategorySchema }
