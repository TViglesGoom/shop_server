'use strict';

module.exports = (sequelize, DataTypes) => {
    const Supplier = sequelize.define('Supplier', {
        name: {
            type: DataTypes.STRING,
            allow_null: false,
        },
    });

    Supplier.associate = (models) => {
        Supplier.hasMany(models.Product, {
            foreignKey: 'supplier_id',
            as: 'Product'
        })
    }

    return Supplier;
}