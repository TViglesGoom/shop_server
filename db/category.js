module.exports = (db) => ({
    addSupplier: ({name}) => {
        return db.Category.create({
            name
        })
    },
    listAllCategories: () => {
        db.Supplier.findAll();
    },
    findSupplier: (id) => {
        return db.Category.findById(id);
    },
    removeSupplier: (category) => {
        return category.destroy();
    }
});