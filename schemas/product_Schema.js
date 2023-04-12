const Joi = require('joi')

const name = Joi.string().min(3).max(20)
const price = Joi.number().integer().min(10)
const id = Joi.string().uuid()
const img = Joi.string().uri()

const getProductSchema = Joi.object({

    id: id.required()
})


const updateProductSchema = Joi.object({

    id:id,
    name: name,
    price: price,
    img: img


})

const postProductSchema = Joi.object({

    name: name.required(),
    price: price.required(),
    img : img

}) 

const deleteProductSchema = Joi.object({

    id: id.required()
    

})


module.exports = {getProductSchema,updateProductSchema, postProductSchema, deleteProductSchema}