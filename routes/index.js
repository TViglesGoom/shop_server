const MainRouter = require('express').Router();

MainRouter.use('/products', require('./product'));

module.exports = MainRouter;