import { Sequelize } from "sequelize";

const db = new Sequelize('user_db', 'root', '',{
    host: "localhost",
    dialect: "mysql"
});

export default db;