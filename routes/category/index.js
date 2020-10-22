const {CategoryController} = require('../../controllers');
const {validateMiddleware} = require('../../middlewares');
const CategorySchema = require('./category.schema');

const CategoryRouter = require('express').Router();

CategoryRouter.post('/', validateMiddleware(CategorySchema), CategoryController.addCategory);
CategoryRouter.get('/', CategoryController.listAllCategories);
CategoryRouter.get('/:id', CategoryController.findCategoryById);
CategoryRouter.delete('/:id', CategoryController.removeCategory);

module.exports = CategoryRouter;