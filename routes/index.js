const MainRouter = require('express').Router();

MainRouter.use('/products', require('./product'));
MainRouter.use('/categories', require('./category'));
MainRouter.use('/suppliers', require('./supplier'));

module.exports = MainRouter;