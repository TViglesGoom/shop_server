const {CategoryCRUD} = require('../db');

module.exports = {
    async addCategory(req, res) {
        try {
            const Category = await CategoryCRUD.addCategory(req.body);
            res.status(200).send(Category);
        } catch (err) {
            res.status(400).send(err);
        }
    },
    async listAllCategories(req, res) {
        try {
            const Categories = await CategoryCRUD.listAllCategories();
            res.status(200).send(Categories);
        } catch (err) {
            res.status(400).send(err);
        }
    },
    async findCategoryById(req, res) {
        const {id} = req.params;
        try {
            const Category = await CategoryCRUD.findCategory(id);
            res.status(200).send(Category);
        } catch (err) {
            res.status(404).send({message: `Category with id ${id} was not found`});
        }
    },
    async removeCategory(req, res) {
        const {id} = req.params;
        let Category;
        try {
            Category = await CategoryCRUD.findCategory(id);
        } catch (err) {
            return res.status(404).send({message: `Category with id ${id} was not found`});
        }
        try {
            Category = await CategoryCRUD.removeCategory(Category);
            res.status(204).send({message: `Category with id ${id} deleted successfully`});
        } catch (err) {
            res.status(400).send(err);
        }
    },
};