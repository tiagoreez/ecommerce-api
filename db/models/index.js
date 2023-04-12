const { UserSchema, User} = require('./user_model')
const { productsSchema, Product} = require('./products_model')
const { categoriesSchema, Category} = require('./category_model')

function setUpModels(sequelize){
    User.init(UserSchema,User.config(sequelize))
    Product.init(productsSchema, Product.config(sequelize))
    Category.init(categoriesSchema,Category.config(sequelize))
}

module.exports = {setUpModels};