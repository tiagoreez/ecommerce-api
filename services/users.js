const { faker } = require('@faker-js/faker')
const boom = require('@hapi/boom')

const { models } = require('../libs/sequelize')

class Users{

    constructor(){
    }

    async get(){

        const response = await models.User.findAll({
            include: ['customer']
            
        })
        return response
    }

    async getOne(id){

        
        const user = await models.User.findByPk(id)
        if(!user){
            throw boom.notFound('User not found')
        }
        return user
    }


    async post(body){
        const newUser = await models.User.create(body)
        return newUser
    }

    async patch(id,body){

        const user = await this.getOne(id)
        const rta = user.update(body)
        return rta
    }

    async delete(id){

        const user = await this.getOne(id)
        await user.destroy()
        return { id }

    }

}


module.exports = Users