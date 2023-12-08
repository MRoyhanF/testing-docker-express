const { Sequelize} = require('sequelize');
const db = require('../config/Database.js');
const Users = require('./UserModel.js');
const Posting = require('./PostingModel.js');

const {DataTypes} = Sequelize;

const Comment = db.define('comment', {
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    comment:{
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
    postingId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
 },{
    freezeTableName: true
 });

Users.hasMany(Comment);
Posting.hasMany(Comment)
Comment.belongsTo(Users, {foreignKey: 'userId'})
Comment.belongsTo(Posting, {foreignKey: 'postingId'})

module.exports = Comment;