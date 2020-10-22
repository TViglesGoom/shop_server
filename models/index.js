const fs = require('fs');
const path = require('path');
const basename = path.basename(module.filename);


module.exports = (sequelize, Sequelize) => {
    const db = {};

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

    return db;
};


