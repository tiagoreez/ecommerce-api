const boom = require('@hapi/boom')
const { models } = require('../libs/sequelize')


class CategoryServices {

    constructor(){}

    
    async get(){

        const categories = await models.Category.findAll()
        return categories

    }


    async getOne(){}
    async post(data){
        const category = models.Category.create(data)
        return category

    }
    async update(){}
    async delete(){}


}


module.exports = { CategoryServices }