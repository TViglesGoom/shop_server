const {SupplierController} = require('../../controllers');
const {validateMiddleware} = require('../../middlewares');
const SupplierSchema = require('./supplier.schema');

const SupplierRouter = require('express').Router();

SupplierRouter.post('/', validateMiddleware(SupplierSchema), SupplierController.addSupplier);
SupplierRouter.get('/', SupplierController.listAllSuppliers);
SupplierRouter.get('/:id', SupplierController.findSupplierById);
SupplierRouter.delete('/:id', SupplierController.removeSupplier);

module.exports = SupplierRouter;