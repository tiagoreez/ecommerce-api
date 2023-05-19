const bcrypt = require('bcrypt')



async function verifyPassword(){
    const myPass = 'admin 123 lala 0/1'
    const hash = '$2b$10$JkTZbyrhDB1LSslbDSgjQeGzdetNc8Y0lhUZJoNKM2NkFupoqNfE6'
    const isMatch = await bcrypt.compare(myPass,hash)
    console.log(isMatch)
}

verifyPassword()