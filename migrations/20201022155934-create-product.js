'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allow_null: false
      },
      price: {
        type: Sequelize.FLOAT,
        defaultValue: 0
      },
      expireAt: {
        type: Sequelize.DATE,
        allow_null: false
      },
      measuring: {
        type: Sequelize.STRING,
        allow_null: false
      },
      quantity: {
        type: Sequelize.FLOAT,
        defaultValue: 0
      },
      supplierId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Suppliers',
          key: 'id',
          as: 'supplierId',
        },
      },
      categoryId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Categories',
          key: 'id',
          as: 'categoryId',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};