const { UserSchema, User} = require('./user_model')
const { productsSchema, Product} = require('./products_model')
const { categoriesSchema, Category} = require('./category_model')
const { customerSchema, Customer} = require('./customers_model')

function setUpModels(sequelize){
    User.init(UserSchema,User.config(sequelize))
    Product.init(productsSchema, Product.config(sequelize))
    Category.init(categoriesSchema,Category.config(sequelize))
    Customer.init(customerSchema, Customer.config(sequelize))


    User.associate(sequelize.models)
    Customer.associate(sequelize.models)
    Category.associate(sequelize.models)
    Product.associate(sequelize.models)
    

}

module.exports = {setUpModels};


