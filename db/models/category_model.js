const { Model, DataTypes } = require('sequelize')

const CATEGORY_TABLE = 'categories'

const categoriesSchema = {

  id: {

    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true

  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  }

}

class Category extends Model {
  static associate (models) {
    this.hasMany(models.Product, {
      as: 'products',
      foreignKey: 'categoryId'
    })
  }

  static config (sequelize) {
    return {

      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: 'Category',
      timestamps: false

    }
  }
}

module.exports = { CATEGORY_TABLE, categoriesSchema, Category }
