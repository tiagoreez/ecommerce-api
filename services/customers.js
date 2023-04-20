
const boom = require('@hapi/boom')
const {models} = require('../libs/sequelize')


class customersService{

    constructor(){}

    async get(){
        const users = await models.Customer.findAll({
            include: ['user']
        })
        return users
    }

    async getOne(id){

        const customer = await models.Customer.findByPk(id,{
            include: ['user']
        })
        if(!customer){
            throw boom.notFound()
        }

        return customer

    }


    async post(body){

        const newCustomer = await models.Customer.create(body, {
            include: ['user']
        })
        

        return newCustomer

    }

    async update(id,body){
        const customer = await this.getOne(id)
        const newCustomer = await customer.update(body)
        return newCustomer
    }


    async delete(id){

        const customer =  await this.getOne(id)
        await customer.destroy()
        return(id)

    }

}


module.exports = customersService