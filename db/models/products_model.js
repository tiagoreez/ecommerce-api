const { Model, DataTypes, Sequelize} = require('sequelize')

const PRODUCTS_TABLE = 'products'

const productsSchema = {

    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,   
        unique: true
    },
    price:{
        allowNull: false,
        type:DataTypes.INTEGER,
    },
    name:{
        allowNull:false,
        type: DataTypes.STRING
    },
    img:{
        type: DataTypes.STRING
    },
    createdAt:{

        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
    }
}

class Product extends Model{

    static config(sequelize){

        return {
            sequelize,
            tableName: PRODUCTS_TABLE,
            modelName: 'Product',
            timeStamp: false

        }

    }

}

module.exports = { Product, productsSchema, PRODUCTS_TABLE}