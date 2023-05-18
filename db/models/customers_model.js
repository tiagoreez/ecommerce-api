
const { Model, DataTypes, Sequelize} = require('sequelize')
const {USER_TABLE} = require('./user_model')

const CUSTOMER_TABLE = 'customers'


const customerSchema = {

    id: {

        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    name: {

        allowNull: false,
        type: DataTypes.STRING
    },
    lastName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'last_name'
    },
    phone: {
        allowNull: false,
        type: DataTypes.STRING
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
        field:'created_at'
    },
    userId: {
        
        field: 'user_id',
        unique: true,
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: USER_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'

    }
}


class Customer extends Model{

    static associate(models){

        this.belongsTo(models.User, { as: 'user'})
        this.hasMany(models.Order,
            {as:'orders',
            foreignKey:'customerId'
            })
    }

    static config(sequelize){

        return {

            sequelize,
            modelName: 'Customer',
            tableName: CUSTOMER_TABLE,
            timestamps: false,

        }

    }

}

module.exports = {Customer, CUSTOMER_TABLE, customerSchema}