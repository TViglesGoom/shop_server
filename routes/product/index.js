const {ProductController} = require('../../controllers');
const {validateMiddleware} = require('../../middlewares');
const ProductSchema = require('./product.schema');

const ProductRouter = require('express').Router();

ProductRouter.post('/', validateMiddleware(ProductSchema), ProductController.createProduct);
ProductRouter.get('/', ProductController.listAllProduct);
ProductRouter.get('/:id', ProductController.findProductById);
ProductRouter.put('/:id', validateMiddleware(ProductSchema), ProductController.updateProductById);
ProductRouter.delete('/:id', ProductController.deleteProduct);

module.exports = ProductRouter;