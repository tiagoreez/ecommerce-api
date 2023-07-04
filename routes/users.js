const Users = require('../services/users')
const service = new Users()

const express = require('express')
const router = express.Router()
const passport = require('passport')
const validatorHandler = require('../middlewares/validatorHandler')
const { getUserSchema, postUserSchema, patchUserSchema } = require('../schemas/user_Schema')
const protectRoute = passport.authenticate('jwt', { session: false })

router.get('/', async (req, res) => {
  const users = await service.get()

  res.status(200).json(users)
})

router.get('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    const { id } = req.params

    try {
      const user = await service.getOne(id)
      res.status(200).json(user)
    } catch (error) {
      next(error)
    }
  }
)

router.post('/', protectRoute,
  validatorHandler(postUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body
      const newUser = await service.post(body)

      res.status(201).json({
        message: 'Created',
        newUser
      })
    } catch (error) {
      next(error)
    }
  }
)

router.patch('/:id', protectRoute,
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(patchUserSchema, 'body'),
  (req, res, next) => {
    const { id } = req.params
    const body = req.body

    try {
      const userPatched = service.patch(id, body)
      res.json({
        message: 'Patched',
        userPatched
      })
    } catch (error) {
      next(error)
    }
  }
)

router.delete('/:id', protectRoute, async (req, res, next) => {
  const { id } = req.params

  try {
    const deletedId = await service.delete(id)
    res.json({
      message: 'User Deleted',
      deletedId
    })
  } catch (error) {
    next(error)
  }
})

module.exports = router
