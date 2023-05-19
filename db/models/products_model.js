const { Model, DataTypes, Sequelize } = require('sequelize')
const { CATEGORY_TABLE } = require('./category_model')

const PRODUCTS_TABLE = 'products'

const productsSchema = {

  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    unique: true
  },
  price: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  img: {
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
  categoryId: {
    field: 'category_id',
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: CATEGORY_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class Product extends Model {
  static associate (models) {
    this.belongsTo(models.Category, { as: 'category' })
  }

  static config (sequelize) {
    return {
      sequelize,
      tableName: PRODUCTS_TABLE,
      modelName: 'Product',
      timestamps: false

    }
  }
}

module.exports = { Product, productsSchema, PRODUCTS_TABLE }
