require('dotenv').config()

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  dbEngine: process.env.DB_ENGINE,
  apiKey: process.env.API_KEY,
  dbUri: process.env.DB_URI,
  jwtSecret: process.env.JWT_SECRET,
  email: process.env.EMAIL,
  password: process.env.EMAIL_PASSWORD
}

module.exports = config
