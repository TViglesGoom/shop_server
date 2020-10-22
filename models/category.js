'use strict';

module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        name: {
            type: DataTypes.STRING,
            allow_null: false,
        }
    });

    Category.associate = (models) => {
        Category.hasMany(models.Product, {
            foreignKey: 'category_id',
            as: 'Product'
        })
    };

    return Category;
}