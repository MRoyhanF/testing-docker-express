const { Sequelize } = require('sequelize');
const db = require('../config/Database.js');
const Users = require('./UserModel.js');
const UserRoom = require('./UserRoomModel.js');

const {DataTypes} = Sequelize;

const Assesment = db.define('assesment', {
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    type_assesment:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len : [3, 100]
        }
    },
    value_assesment:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len : [3, 100]
        }
    },
    result:{
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    userRoomId:{
        type: DataTypes.INTEGER,
        // allowNull: false,
        // validate: {
        //     notEmpty: true
        // }
    },
 },{
    freezeTableName: true
 });

 Users.hasMany(Assesment);
 UserRoom.hasMany(Assesment);
 Assesment.belongsTo(Users, {foreignKey: 'userId'});
 Assesment.belongsTo(UserRoom, {foreignKey: 'userRoomId'});

module.exports = Assesment;

// export default Assesment;