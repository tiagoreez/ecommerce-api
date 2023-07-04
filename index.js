const express = require('express')
const routerApi = require('./routes/routesIndex.js')
const config = require('./config/config')
const { checkApiKey } = require('./middlewares/authHandler.js')
// const passport = require('passport')
const { logErrors, errorHandler, boomErrorHandler, queryErrorHandler } = require('./middlewares/errorHandler')
// const cors = require('cors')
const app = express()
const PORT = config.port || 3000

app.use(express.json())
// require('./utils/auth/index.js')

/* const whiteList = ['http://localhost:3000', 'https://myapp.co']
const options = {
  origin: (origin,cb)=>{
      if(whiteList.includes(origin)){
        cb(null,true)
      }else{
        cb(new Error('No permitido'))
      }
      }
  }
app.use(cors(options)) */
// app.use(passport.initialize())
require('./utils/auth')

app.get('/', (req, res) => {
  res.send('Hello world')
})
app.get('/nueva-ruta', checkApiKey, (req, res) => {
  res.send('Hola soy una nueva ruta')
})

routerApi(app)
app.use(logErrors)
app.use(boomErrorHandler)
app.use(queryErrorHandler)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`listenign on ${PORT}`)
})
