const { Sequelize } = require ('sequelize');
const db = require ('../config/Database.js');

const {DataTypes} = Sequelize;

const Room = db.define('room', {
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len : [3, 100]
        }
    },
    capacity:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
 },{
    freezeTableName: true
 });

 module.exports = Room;