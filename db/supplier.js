module.exports = (db) => ({
    addSupplier: ({name}) => {
        return db.Supplier.create({
            name
        })
    },
    listAllSuppliers: () => {
        return db.Supplier.findAll();
    },
    findSupplier: (id) => {
        return db.Supplier.findByPk(id);
    },
    removeSupplier: (supplier) => {
        return supplier.destroy();
    }
});