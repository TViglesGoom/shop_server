const {CategoryController} = require('../../controllers');

const CategoryRouter = require('express').Router();

CategoryRouter.post('/', CategoryController.addCategory);
CategoryRouter.get('/', CategoryController.listAllCategories);
CategoryRouter.get('/:id', CategoryController.findCategoryById);
CategoryRouter.delete('/:id', CategoryController.removeCategory);

module.exports = CategoryRouter;