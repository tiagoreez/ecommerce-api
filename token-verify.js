const jwt = require('jsonwebtoken')

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY4ODQxNzg2NiwiZXhwIjoxNjg5MDIyNjY2fQ.lvMr9M8c67AsEE6SMmPU89Y-5SntpqyxvU7kr4KyNUA'

const secret = 'palabra secreta'

const payload = jwt.verify(token, secret)

console.log(payload)
