'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(models) {
            Product.belongsTo(models.Category, {
                foreignKey: 'categoryId',
                onDelete: 'CASCADE'
            });
            Product.belongsTo(models.Supplier, {
                foreignKey: 'supplierId',
                onDelete: 'CASCADE'
            });
        }
    }

    Product.init({
        name: {
            type: DataTypes.STRING,
            allow_null: false
        },
        price: {
            type: DataTypes.FLOAT,
            defaultValue: 0
        },
        expiration_date: {
            type: DataTypes.DATE,
            allow_null: false
        },
        measuring: {
            type: DataTypes.STRING,
            allow_null: false
        },
        quantity: {
            type: DataTypes.FLOAT,
            defaultValue: 0
        },
    }, {
        sequelize,
        modelName: 'Product',
    });
    return Product;
};