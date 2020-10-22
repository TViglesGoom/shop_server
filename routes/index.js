const MainRouter = require('express').Router();

MainRouter.use('/products', require('./product'));
MainRouter.use('/categories', require('./category'));

module.exports = MainRouter;