'use strict';

module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
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
    });

    Product.associate = (models) => {
        Product.belongsTo(models.Category, {
            foreignKey: 'category_id',
            onDelete: 'CASCADE'
        });
        Product.belongsTo(models.Supplier, {
            foreignKey: 'supplier_id',
            onDelete: 'CASCADE'
        });
    };

    return Product;
};