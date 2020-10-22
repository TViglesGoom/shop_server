module.exports = (db) => ({
    addCategory: ({name}) => {
        return db.Category.create({
            name
        })
    },
    listAllCategories: () => {
        db.Supplier.findAll();
    },
    findCategory: (id) => {
        return db.Category.findById(id);
    },
    removeCategory: (category) => {
        return category.destroy();
    }
});