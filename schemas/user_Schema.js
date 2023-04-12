const Joi = require('joi')
/*              

id : faker.datatype.uuid(),
 name: faker.name.firstName(),
lastName: faker.name.lastName(),
phoneNumber: faker.phone.number() */

const name = Joi.string().min(3).max(20)
const id = Joi.string().uuid()
const lastName = Joi.string().min(3).max(20)
const phoneNumber = Joi.string()


const getUserSchema = Joi.object({

    id: id.required()

})

const postUserSchema = Joi.object({

    name: name.required(),
    lastName: lastName.required(),
    phoneNumber: phoneNumber.required()

})

const patchUserSchema = Joi.object({
    id:id,
    name: name,
    lastName: lastName,
    phoneNumber: phoneNumber

})

const deleteUserSchema = Joi.object({

    id: id.required()

})


module.exports = { getUserSchema, postUserSchema, patchUserSchema, deleteUserSchema }