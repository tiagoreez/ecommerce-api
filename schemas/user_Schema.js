const Joi = require('joi')
/*

id : faker.datatype.uuid(),
 name: faker.name.firstName(),
lastName: faker.name.lastName(),
phoneNumber: faker.phone.number() */

const id = Joi.number().integer()
const email = Joi.string().email()
const password = Joi.string().min(8)
const role = Joi.string()

const getUserSchema = Joi.object({

  id: id.required()

})

const postUserSchema = Joi.object({
  id,
  email: email.required(),
  password: password.required(),
  role

})

const patchUserSchema = Joi.object({
  id,
  email,
  password,
  role

})

const deleteUserSchema = Joi.object({

  id: id.required()

})

module.exports = { getUserSchema, postUserSchema, patchUserSchema, deleteUserSchema }
