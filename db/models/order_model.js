const {Model, DataTypes, Sequelize} = require('sequelize')
const { CUSTOMER_TABLE } = require('./customers_model')


const ORDER_TABLE = 'orders'


const orderSchema = {

    id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    customerId:{
        allowNull:false,
        type: DataTypes.INTEGER,
        field: 'customer_id',
        references:{
            model: CUSTOMER_TABLE,
            key:'id'
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    },
    createdAt:{
        allowNull:false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
        field: 'created_at'
    },
    total: {

        type: DataTypes.VIRTUAL,
        get(){
            if(this.items.length > 0){

                return this.items.reduce((total, item)=>{
                    return total + (item.price * item.OrderProduct.amount)
                },0)

            }
            return 0
        }

    }
    

}


class Order extends Model {

    static associate(models){

        this.belongsTo(models.Customer,{as: 'customer'})
        this.belongsToMany(models.Product, {
            as: 'items',
            through: models.OrderProduct,
            foreignKey: 'orderId',
            otherKey:'productId'

        })
    }

    static config(sequelize){

        return {

            sequelize,
            modelName: 'Order',
            tableName: ORDER_TABLE,
            timestamps: false

        }
    }

}

module.exports = { ORDER_TABLE, orderSchema, Order }