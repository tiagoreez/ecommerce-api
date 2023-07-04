
const express = require('express')
const router = express.Router()
const passport = require('passport')
const ProductService = require('../services/product')
const service = new ProductService()

const validatorHandler = require('../middlewares/validatorHandler')
const { getProductSchema, updateProductSchema, postProductSchema, deleteProductSchema } = require('../schemas/product_Schema')
const protectRoute = passport.authenticate('jwt', { session: false })
router.get('/', async (req, res) => {
  const products = await service.get()
  res.json(products)
})

/* router.get('/generate',async (req,res)=>{

  const allProducts = await service.generate()
  res.json(allProducts)

}) */

router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const product = await service.getOne(id)
      res.json(product)
    } catch (error) {
      next(error)
    }
  })

router.post('/', protectRoute,
  validatorHandler(postProductSchema, 'body'),
  async (req, res) => {
    const body = req.body
    const newProduct = await service.create(body)
    res.status(201).json({
      message: 'created',
      newProduct
    })
  })

router.patch('/:id', protectRoute,

  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const body = req.body
      const patchedProduct = await service.update(id, body)
      res.json({
        message: 'update',
        data: body,
        patchedProduct
      })
    } catch (error) {
      next(error)
    }
  })

router.delete('/:id', protectRoute,
  validatorHandler(deleteProductSchema, 'params'),
  async (req, res, next) => {
    const { id } = req.params
    try {
      const deletedProduct = await service.delete(id)
      res.json({
        message: 'deleted',
        deletedProduct
      })
    } catch (error) {
      next(error)
    }
  })

module.exports = router
