const { Sequelize } = require ('sequelize');
const db = require ('../config/Database.js');
const Users = require ('./UserModel.js');

const {DataTypes} = Sequelize;

const Posting = db.define('posting', {
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    posting:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len : [3, 100]
        }
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
 },{
    freezeTableName: true
 });

Users.hasMany(Posting);
Posting.belongsTo(Users, {foreignKey: 'userId'})

module.exports = Posting;