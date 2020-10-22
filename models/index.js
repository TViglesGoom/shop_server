const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
require('dotenv').config({path: './config/.env'});
const db = {};


const {DB_NAME, DB_USER, DB_PASSWORD, DB_SERVER, DB_DIALECT} = process.env;
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_SERVER,
    dialect: DB_DIALECT,
});

fs
    .readdirSync(__dirname)
    .filter(file =>
        (file !== basename) &&
        (file.slice(-3) === '.js'))
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });
Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;