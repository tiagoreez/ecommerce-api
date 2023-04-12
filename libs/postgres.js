const { Client } = require('pg')
const { password } = require('pg/lib/defaults')

async function getConnection(){

    const client = new Client({

        host: 'localhost',
        port: 5432,
        user: 'reez',
        password: 'admin123',
        database: 'my_store'
    
        
    })

    await client.connect()
    return client;
}

module.exports = getConnection