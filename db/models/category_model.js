const {Model, DataTypes, Sequelize} = require('sequelize')


const CATEGORY_TABLE = 'categories'

const categoriesSchema = {

    id:{

        allowNull: false,
        type: DataTypes.INTEGER,
        autoIncrement: true

    },
    name:{
        allowNull: false,
        type: DataTypes.STRING,
    },
   
}

class Category extends Model{


    static config(sequelize){
        return {

            sequelize,
            tableName: CATEGORY_TABLE,
            modelName: 'Category',
            timeStamp: false

        }

    }

}

module.exports = { CATEGORY_TABLE, categoriesSchema, Category}