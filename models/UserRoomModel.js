import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";
import Room from "./RoomModel.js";

const {DataTypes} = Sequelize;

const UserRoom = db.define('user_room', {
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    roleRoom:{
        type: DataTypes.STRING,
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
    roomId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
 },{
    freezeTableName: true
 });


 Users.hasMany(UserRoom);
//  UserRoom.hasMany(Room);
 UserRoom.belongsTo(Room, {foreignKey: 'roomId'});
//  UserRoom.belongsTo(Users, {foreignKey: 'userId'});
 
 export default UserRoom;