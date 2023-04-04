const express = require('express')

const router = express.Router()

router.get('/categories', (req, res) => {
  res.json([
    {
      categoryID: 1,
      name: 'Sports'
    },
    {
      categoryID: 2,
      name: 'Entertainment'
    },
    {
      categoryID: 3,
      name: 'Electronics'
    }
  ])
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

router.post('/', (req, res) => {
  const body = req.body
  res.json({
    message: 'Created',
    body
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
