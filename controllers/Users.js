const User = require('../models/UserModel.js');
const bcrypt = require('bcrypt');

// import User from "../models/UserModel.js";
// import bcrypt from "bcrypt";


// start get all user
const getUsers = async(req, res) =>{
    try {
        const response = await User.findAll({
            attributes: ['uuid','name','email','role']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}
// end get all user

// start get one user
const getUserById = async(req, res) =>{
    try {
        const response = await User.findOne({
            attributes: ['uuid','name','email','role'],
            where: {
                uuid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}
// end set one user

// start create user
const createUser = async(req, res) =>{
    const {name, email, password, confPassword, role}= req.body
    if(password !== confPassword) return res.status(400).json({msg : "Password dan Confirm Password tidak cocok"});
    const hashPassword = await bcrypt.hash(password, 10);
    try {
        await User.create({
            name: name,
            email: email,
            password: hashPassword,
            role: role
        });
        res.status(201).json({msg :"Register Berhasil"})
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}
// end create user

// start update user
const updateUser = async(req, res) =>{
    const user = await User.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!user) return res.status(404).json({msg :"User tidak ditemukan"})
    const {name, email, password, confPassword, role}= req.body
    let hashPassword;
    if(password === "" || password === null){
        hashPassword = user.password
    }else{
        hashPassword = await bcrypt.hash(password, 10);
    }
    if(password !== confPassword) return res.status(400).json({msg : "Password dan Confirm Password tidak cocok"});
    try {
        await User.update({
            name: name,
            email: email,
            password: hashPassword,
            role: role
        },{
            where:{
                id: user.id
            }
        });
        res.status(200).json({msg :"User Updated"})
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}
// end update user

// start delete user
const deleteUser = async(req, res) =>{
    const user = await User.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!user) return res.status(404).json({msg :"User tidak ditemukan"})
    try {
        await User.destroy({
            where:{
                id: user.id
            }
        });
        res.status(200).json({msg :"User Deleted"})
    } catch (error) {
        res.status(400).json({msg: error.message})
    }  
}
// end delete user

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };