'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.Product, {
        foreignKey: 'categoryId',
        as: 'Product'
      })
    }
  }
  Category.init({
    name: {
      type: DataTypes.STRING,
      allow_null: false,
    }
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};