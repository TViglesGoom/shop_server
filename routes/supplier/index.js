const {SupplierController} = require('../../controllers');

const SupplierRouter = require('express').Router();

SupplierRouter.post('/', SupplierController.addSupplier);
SupplierRouter.get('/', SupplierController.listAllSuppliers);
SupplierRouter.get('/:id', SupplierController.findSupplierById);
SupplierRouter.delete('/:id', SupplierController.removeSupplier);

module.exports = SupplierRouter;