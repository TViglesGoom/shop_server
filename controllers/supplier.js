const {SupplierCRUD} = require('../db');

module.exports = {
    async addSupplier(req, res) {
        try {
            const Supplier = await SupplierCRUD.addSupplier(req.body);
            res.status(200).send(Supplier);
        } catch (err) {
            res.status(400).send(err);
        }
    },
    async listAllSuppliers(req, res) {
        try {
            const Suppliers = await SupplierCRUD.listAllSuppliers();
            res.status(200).send(Suppliers);
        } catch (err) {
            res.status(400).send(err);
        }
    },
    async findSupplierById(req, res) {
        const {id} = req.params;
        try {
            const Product = await SupplierCRUD.findSupplier(id);
            res.status(200).send(Product);
        } catch (err) {
            res.status(404).send({message: `Supplier with id ${id} was not found`});
        }
    },
    async removeSupplier(req, res) {
        const {id} = req.params;
        let Product;
        try {
            Product = await SupplierCRUD.findSupplier(id);
        } catch (err) {
            return res.status(404).send({message: `Supplier with id ${id} was not found`});
        }
        try {
            Product = await SupplierCRUD.removeSupplier(Product);
            res.status(204).send(Product);
        } catch (err) {
            res.status(400).send(err);
        }
    },
};