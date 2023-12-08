const { Sequelize } = require ('sequelize');

const db = new Sequelize('test', 'root', '',{
    host: "localhost",
    dialect: "mysql"
});

module.exports = db;