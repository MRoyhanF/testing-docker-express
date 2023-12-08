const User = require('../models/UserModel.js');
// import User from "../models/UserModel.js"

// validasi login
const verifyUser = async (req, res, next) =>{
    if(!req.session.userId){
        return res.status(401).json({msg: "Mohon login ke akun Anda!"})
    }
    const user = await User.findOne({
        where: {
            uuid: req.session.userId
        }
    });
    if(!user) return res.status(404).json({msg :"User tidak ditemukan"})
    req.userId = user.id;
    req.role = user.role;
    next();
}

// validasi admin
const adminOnly = async (req, res, next) =>{
    const user = await User.findOne({
        where: {
            uuid: req.session.userId
        }
    });
    if(!user) return res.status(404).json({msg :"User tidak ditemukan"});
    if(user.role !== "admin")  return res.status(403).json({msg :"Akses Terlarang"});
    next();
}

module.exports = { verifyUser, adminOnly }
