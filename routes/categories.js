const express = require('express')
const router = express.Router()

const { CategoryServices } = require('../services/categories')
const service = new CategoryServices()

router.get('/', async(req, res) => {
    const categories = await service.get()
    res.json(categories)
})

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

router.post('/', async (req, res) => {
  const body = req.body
  const newCategory = await service.post(body)
  res.json({
    message: 'Created',
    newCategory
  })
})

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body

  res.json({
    message: 'Updated',
    body,
    id

  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params

  res.json({
    message: 'Updated',
    id

  })
})

module.exports = router
