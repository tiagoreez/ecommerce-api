
const config = require('../config/config')
const boom = require('@hapi/boom')

function checkApiKey (req, res, next) {
  const apiKey = req.headers.api

  if (apiKey === config.apiKey) {
    next()
  } else {
    next(boom.unauthorized())
  }
}

function checkRoles (roles) {
  return (req, res, next) => {
    const user = req.user
    if (roles.includes(user.role)) {
      next()
    } else {
      next(boom.forbidden('You don\'t have permission to do that'))
    }
  }
}

module.exports = { checkApiKey, checkRoles }
