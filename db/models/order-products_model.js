const {Model , DataTypes, Sequelize} = require('sequelize')
const { ORDER_TABLE } = require('./order_model')
const { PRODUCTS_TABLE } = require('./products_model')

const ORDER_PRODUCT_TABLE = 'orders_products'

const orderProductsSchema = {

    id:{
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,   
        unique: true
    },
    amount:{
        allowNull:false,
        type:DataTypes.INTEGER
    },
    orderId:{

        field: 'order_id',
        allowNull:false,
        type: DataTypes.INTEGER,
        references: {
            model: ORDER_TABLE,
            key: 'id'
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE"

    },
    productId:{

        field: 'product_id',
        allowNull:false,
        type: DataTypes.INTEGER,
        references: {
            model: PRODUCTS_TABLE,
            key: 'id'
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE"

    },
    createdAt:{

        field: 'created_at',
        type: DataTypes.DATE,
        allowNull:false,
        defaultValue: Sequelize.NOW

    }

}

class OrderProduct extends Model{

    static associate(models){
        //
    }

    static config(sequelize){
        return {

            sequelize,
            modelName: 'OrderProduct',
            tableName: ORDER_PRODUCT_TABLE,
            timestamps: false
        }

    }

}

module.exports = {OrderProduct,orderProductsSchema,ORDER_PRODUCT_TABLE}