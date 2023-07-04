const express = require('express')
const router = express.Router()
const passport = require('passport')

const { CategoryServices } = require('../services/categories')
const service = new CategoryServices()

const validatorHandler = require('../middlewares/validatorHandler')
const { checkRoles } = require('../middlewares/authHandler')
const { getCategorySchema, postCategorySchema, patchCategorySchema } = require('../schemas/categories_Schema')

const protectRoute = passport.authenticate('jwt', { session: false })
// Category routes

router.get('/', async (req, res) => {
  const categories = await service.get()
  res.status(200).json(categories)
})

router.get('/:id', validatorHandler(getCategorySchema, 'params'),
  async (req, res, next) => {
    const { id } = req.params
    try {
      const category = await service.getOne(id)
      res.status(200).json(category)
    } catch (error) {
      next(error)
    }
  }
)

router.get('/categories/:categoryID/products/:productID', (req, res) => {
  const { categoryID, productID } = req.params
  res.json(
    {
      categoryID,
      productID,
      name: 'Samsung',
      price: 1000
    }
  )
})

router.post('/',
  protectRoute,
  checkRoles(['admin']),
  validatorHandler(postCategorySchema, 'body'),
  async (req, res) => {
    const body = req.body
    const newCategory = await service.post(body)
    res.json({
      message: 'Created',
      newCategory
    })
  }
)

router.patch('/:id', protectRoute,
  validatorHandler(getCategorySchema, 'params'),
  validatorHandler(patchCategorySchema, 'body'),
  async (req, res) => {
    const { id } = req.params
    const body = req.body

    const categoryPatched = await service.update(id, body)

    res.json({
      message: 'Updated',
      categoryPatched
    })
  })

router.delete('/:id',
  protectRoute,
  validatorHandler(getCategorySchema, 'params'),

  async (req, res, next) => {
    const { id } = req.params
    try {
      const deletedUser = await service.delete(id)
      res.status(200).json({
        message: 'deleted',
        deletedUser
      })
    } catch (error) {
      next(error)
    }
  })

module.exports = router
