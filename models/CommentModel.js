import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js"
import Posting from "./PostingModel.js";

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

 export default Comment;