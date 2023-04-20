const express = require('express')
const routerApi = require('./routes/routesIndex.js')
const config = require('./config/config')
const { logErrors, errorHandler, boomErrorHandler, queryErrorHandler } = require('./middlewares/errorHandler')
const cors = require('cors')
const app = express()
const PORT = config.port


console.log(PORT)
app.use(express.json())



/*const whiteList = ['http://localhost:3000', 'https://myapp.co']
const options = {
  origin: (origin,cb)=>{
      if(whiteList.includes(origin)){
        cb(null,true)
      }else{
        cb(new Error('No permitido'))
      }
      }
  }
app.use(cors(options))*/

app.get('/', (req, res) => {
  res.send('Hello world')
})



routerApi(app)
app.use(logErrors)
app.use(boomErrorHandler)
app.use(queryErrorHandler)
app.use(errorHandler)



app.listen(PORT, () => {
  console.log(`listenign on ${PORT}`)
})
