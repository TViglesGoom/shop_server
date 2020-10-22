module.exports = (db) => ({
    createProduct: ({name, price, expireAt, measuring, quantity, supplierId, categoryId}) => {
        return db.Product.create({
            name, price, expireAt, measuring, quantity, supplierId, categoryId
        });
    },
    listAllProducts: () => {
        return db.Product.findAll({
                include: [
                    {
                        model: db.Supplier,
                        as: 'Supplier',
                    },
                    {
                        model: db.Category,
                        as: 'Category'
                    }
                ],
            }
        )
    },
    findProductById: (id) => {
        return db.Product.findByPk(id);
    },
    updateProduct: (product, {name, price, expireAt, measuring, quantity, supplierId, categoryId}) => {
        return product.update({
            name, price, expireAt, measuring, quantity, supplierId, categoryId
        });
    },
    deleteProduct: (product) => {
        return product.destroy();
    }
});