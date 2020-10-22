'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Supplier extends Model {
        static associate(models) {
            Supplier.hasMany(models.Product, {
                foreignKey: 'supplierId',
                as: 'Product'
            })
        }
    }

    Supplier.init({
        name: {
            type: DataTypes.STRING,
            allow_null: false,
        },
    }, {
        sequelize,
        modelName: 'Supplier',
    });
    return Supplier;
};
