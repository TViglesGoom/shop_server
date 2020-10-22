const {ProductController} = require('../../controllers');

const ProductRouter = require('express').Router();

ProductRouter.post('/', ProductController.createProduct);
ProductRouter.get('/', ProductController.listAllProduct);
ProductRouter.get('/:id', ProductController.findProductById);
ProductRouter.put('/:id', ProductController.updateProductById);
ProductRouter.delete('/:id', ProductController.deleteProduct);

module.exports = ProductRouter;