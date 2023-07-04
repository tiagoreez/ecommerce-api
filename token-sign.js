const jwt = require('jsonwebtoken')

const secret = 'palabra secreta'

const jwtConfig = {

  expiresIn: '7d'

}

const payload = {

  sub: 1,
  role: 'customer'

}

const token = jwt.sign(payload, secret, jwtConfig)

console.log(token)
