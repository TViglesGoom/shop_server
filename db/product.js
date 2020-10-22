module.exports = (db) => ({
    createProduct: ({name, price, expirationDate, measuring, quantity, supplierId, categoryId}) => {
        return db.Product.create({
            name, price, expirationDate, measuring, quantity, supplierId, categoryId
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
    findProductById: (productId) => {
        return db.Product.findById(productId);
    },
    updateProduct: (product, {name, price, expirationDate, measuring, quantity, supplierId, categoryId}) => {
        return product.update({
            name, price, expirationDate, measuring, quantity, supplierId, categoryId
        });
    },
    deleteProduct: (product) => {
        return product.destroy();
    }
});