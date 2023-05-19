const express = require('express')
const router = express.Router()

const CustomersService = require('../services/customers')
const service = new CustomersService()

const validatorHandler = require('../middlewares/validatorHandler')
const { getCustomerSchema, postCustomerSchema, patchCustomerSchema } = require('./../schemas/costumers_Schema')

// return all the costumers
router.get('/', async (req, res) => {
  const users = await service.get()

  res.status(200).json(users)
})

router.get('/:id', validatorHandler(getCustomerSchema, 'params'),

  async (req, res, next) => {
    const { id } = req.params
    try {
      const user = await service.getOne(id)
      res.status(200).json(user)
    } catch (err) {
      next(err)
    }
  })

router.post('/', validatorHandler(postCustomerSchema, 'body'),
  async (req, res, next) => {
    const body = req.body
    try {
      const newUser = await service.post(body)
      res.status(201).json(newUser)
    } catch (error) {
      next(error)
    }
  }
)

router.patch('/:id',
  validatorHandler(getCustomerSchema, 'params'),
  validatorHandler(patchCustomerSchema, 'body'),
  async (req, res, next) => {
    const body = req.body
    const { id } = req.params
    try {
      const customerPatched = await service.update(id, body)
      res.status(200).json(customerPatched)
    } catch (error) {
      next(error)
    }
  })

router.delete('/:id', validatorHandler(getCustomerSchema, 'params'),
  async (req, res) => {
    const { id } = req.params
    const deletedCustomer = await service.delete(id)
    res.status(200).json(deletedCustomer)
  })

module.exports = router
