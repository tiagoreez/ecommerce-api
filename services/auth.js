const UserSevice = require('./users')
const boom = require('@hapi/boom')
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')
const service = new UserSevice()
const jwt = require('jsonwebtoken')
const config = require('../config/config')

class AuthService {
  async getUser (email, password) {
    const user = await service.getOneByEmail(email)
    if (!user) {
      throw boom.unauthorized()
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      throw boom.unauthorized()
    }
    delete user.dataValues.password
    return user
  }

  signToken (user) {
    const payload = {
      sub: user.id,
      role: user.role
    }
    const token = jwt.sign(payload, config.jwtSecret)
    return {
      user,
      token
    }
  }

  async sendRecovery (email) {
    const user = await service.getOneByEmail(email)
    if (!user) {
      throw boom.unauthorized()
    }
    const payload = {
      sub: user.id
    }
    const token = jwt.sign(payload, config.jwtSecret, { expiresIn: '15min' })
    const link = `http://myfrontend.com/recovery?token=${token}`
    await service.patch(user.id, { recoveryToken: token })
    const mail = {
      from: config.email, // sender address
      to: `${user.email}`, // list of receivers
      subject: 'Recovery Password', // Subject line
      html: `<b>click this link to recover your password => ${link}</b>` // html body
    }

    const rta = await this.sendMail(mail)
    return rta
  }

  async changePassword (token, newPassword) {
    const payload = jwt.verify(token, config.jwtSecret)
    const user = await service.getOne(payload.sub)
    if (user.recoveryToken !== token) {
      throw boom.unauthorized()
    }
    const hash = await bcrypt.hash(newPassword, 10)
    console.log(hash)

    await service.patch(user.id, { recoveryToken: null, password: hash })
    return { message: 'password changed' }
  }

  async sendMail (infoMail) {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      auth: {
        user: config.email,
        pass: config.password
      }
    })
    await transporter.sendMail(infoMail)
    return { message: 'mail sent' }
  }
}

module.exports = AuthService
