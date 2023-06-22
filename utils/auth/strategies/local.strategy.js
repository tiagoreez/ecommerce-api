const { Strategy } = require('passport-local')
const UserSevice = require('../../../services/users')
const boom = require('@hapi/boom')
const bcrypt = require('bcrypt')
const service = new UserSevice()

const localStrategy = new Strategy({

  usernameField: 'email'

},

async (email, password, done) => {
  try {
    const user = await service.getOneByEmail(email)
    if (!user) {
      done(boom.notFound(), false)
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      done(boom.unauthorized(), false)
    }
    delete user.dataValues.password
    done(null, user)
  } catch (error) {
    done(error, false)
  }
})

module.exports = localStrategy
