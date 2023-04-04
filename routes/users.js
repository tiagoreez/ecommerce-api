const Users = require('../services/users')
const service = new Users()

const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{

  const users = service.get()

  res.status(200).json(users)
  

})

router.get('/:userID',(req,res)=>{

  const { userID } = req.params
  
  try {

    const user = service.getOne(userID)
    res.status(200).json(user)
    
  } catch (error) {

    next(error)

  }

})

router.post('/', (req, res)=>{

  const body = req.body
  const newUser = service.post(body)

  res.status(201).json({
    message: 'Created',
    newUser
  })


})


router.patch('/:id', (req, res)=>{

  const { id } = req.params
  const body = req.body
  
  try {

    const userPatched = service.patch(id,body)
    res.json({
      message: 'Patched',
      userPatched,
    })

    
  } catch (error) {
    next(error)
  }
  

})


router.delete('/:id', (req, res)=>{
  const { id } = req.params

  try {

    const deletedId = service.delete(id)
    res.json({
      message: 'User Deleted',
      deletedId

    })
    
  } catch (error) {
    next(error)
  }

})



module.exports = router