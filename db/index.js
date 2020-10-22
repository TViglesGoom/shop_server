const Sequelize = require('sequelize');
require('dotenv').config({path: './config/.env'});


const {DB_NAME, DB_USER, DB_PASSWORD, DB_SERVER, DB_DIALECT} = process.env;
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_SERVER,
    dialect: DB_DIALECT,
});

const db = require('../models/index')(sequelize, Sequelize);

const ProductCRUD = require('./product')(db);

module.exports = {
    ProductCRUD,
}