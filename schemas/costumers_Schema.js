const { postUserSchema, patchUserSchema} = require('./user_Schema')

const Joi = require('joi')

const id = Joi.number().integer()
const name = Joi.string().min(4)
const lastName = Joi.string().min(4)
const phone = Joi.string().min(7)
const userId = Joi.number().integer()

const getCustomerSchema = Joi.object({

    id:id.required()

})

const postCustomerSchema = Joi.object({

    name: name.required(),
    lastName: lastName.required(),
    phone: phone.required(),
    user: postUserSchema

})
const patchCustomerSchema = Joi.object({

    name: name,
    lastName: lastName,
    phone: phone,
    userId: userId

})

module.exports = { getCustomerSchema, postCustomerSchema, patchCustomerSchema }
