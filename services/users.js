const { faker } = require('@faker-js/faker')
const boom = require('@hapi/boom')

const { models }= require('../libs/sequelize')

class Users{

    constructor(){

        this.users = []
        this.create()

    }

    create(){

        for (let index = 0; index < 100; index++) {
            
            this.users.push({
                id : faker.datatype.uuid(),
                name: faker.name.firstName(),
                lastName: faker.name.lastName(),
                phoneNumber: faker.phone.number()
            })
        }
    }

    async get(){

        const response = await models.User.findAll()
        return response
    }

    getOne(id){
        const user = this.users.find((item) => item.id === id )
        if(!user){
            throw boom.notFound('User not found') 
        }
        return user
    }

    post(body){

        const newUser = {
            
            ...body,
            id: faker.datatype.uuid(),
            
        }

        this.users.push(newUser)
        return newUser
    }

    patch(id,body){

        const index = this.users.findIndex(item => item.id === id)

        if(index === -1){
            throw boom.notFound('User Not Found')
        }

        const user = this.users[index]

        this.users[index] = {

            ...user,
            ...body

        }

        return this.users[index]

    }

    delete(id){

        const index = this.users.findIndex(item => item.id === id)

        if(index === -1){
            throw boom.notFound('User Not Found')
        }

        this.users.splice(index,1)

        return id


    }

}


module.exports = Users