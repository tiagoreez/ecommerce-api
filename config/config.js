require('dotenv').config()

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  dbEngine: process.env.DB_ENGINE,
  apiKey: process.env.API_KEY,
  jwtSecret: process.env.JWT_SECRET,
  email: process.env.SMPT_EMAIL,
  password: process.env.SMPT_EMAIL_PASSWORD,
  dbUri: `${process.env.DB_ENGINE}://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@localhost:5432/${process.env.POSTGRES_DB}`
}

module.exports = config
