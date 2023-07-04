const express = require('express')
const passport = require('passport')
const router = express.Router()
const AuthService = require('../services/auth')
const service = new AuthService()

router.post('/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const { user } = req
      const response = service.signToken(user)
      res.json(response)
    } catch (error) {
      next(error)
    }
  })

router.post('/recovery',
  async (req, res, next) => {
    try {
      const { email } = req.body
      const rta = await service.sendRecovery(email)
      res.json(rta)
    } catch (error) {
      next(error)
    }
  })

module.exports = router
