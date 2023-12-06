import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";
import UserRoom from "./UserRoomModel.js";

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

 export default Assesment;