const config = require('../config/config')
const { Pool } = require('pg')

const URI = `postgres://${config.dbUser}:${config.dbPassword}@${config.dbHost}:${config.dbPort}/${config.dbName}`


const pool = new Pool({ connectionString: URI})



module.exports = pool