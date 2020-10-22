const {ProductCRUD} = require('../db');
const ProductSchema = require('./')

module.exports = {
    async createProduct(req, res) {
        try {
            const Product = await ProductCRUD.createProduct(req.body);
            res.status(200).send(Product);
        } catch (err) {
            res.status(400).send(err);
        }
    },
    async listAllProduct(req, res) {
        try {
            const Products = await ProductCRUD.listAllProducts();
            res.status(200).send(Products);
        } catch (err) {
            res.status(400).send(err);
        }
    },
    async findProductById(req, res) {
        const {id} = req.params;
        try {
            const Product = await ProductCRUD.findProductById(id);
            res.status(200).send(Product);
        } catch (err) {
            res.status(404).send({message: `Product with id ${id} was not found`});
        }
    },
    async updateProductById(req, res) {
        const {id} = req.params;
        let Product;
        try {
            Product = await ProductCRUD.findProductById(id);
        } catch (err) {
            return res.status(404).send({message: `Product with id ${id} was not found`});
        }
        try {
            Product = await ProductCRUD.updateProduct(Product, req.body);
            res.status(200).send(Product);
        } catch (err) {
            res.status(400).send(err);
        }
    },
    async deleteProduct(req, res) {
        const {id} = req.params;
        let Product;
        try {
            Product = await ProductCRUD.findProductById(id);
        } catch (err) {
            return res.status(404).send({message: `Product with id ${id} was not found`});
        }
        try {
            Product = await ProductCRUD.deleteProduct(Product);
            res.status(204).send({message: `Product with id ${id} deleted successfully`});
        } catch (err) {
            res.status(400).send(err);
        }
    },
};