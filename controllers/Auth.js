const User = require('../models/UserModel.js');
const bcrypt = require ('bcrypt');

// import User from "../models/UserModel.js"
// import bcrypt from "bcrypt";

const Login =async (req, res) => {
    try {
        const user = await User.findOne({
          where: {
            email: req.body.email,
          },
        });
    
        if (!user) {
          return res.status(404).json({ msg: "User tidak ditemukan" });
        }
    
        const match = await bcrypt.compare(req.body.password, user.password);
    
        if (!match) {
          return res.status(400).json({ msg: "Wrong Password" });
        }
    
        req.session.userId = user.uuid;
        const { uuid, name, email, role } = user;
        res.status(200).json({ uuid, name, email, role });

      } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ msg: "Terjadi kesalahan saat proses login" });
      }
}

// function get user login
const Me = async(req, res) =>{
    if(!req.session.userId){
        return res.status(401).json({msg: "Mohon login ke akun Anda!"})
    }
    const user = await User.findOne({
        attributes:['uuid', 'name', 'email', 'role'],
        where: {
            uuid: req.session.userId
        }
    });
    if(!user) return res.status(404).json({msg :"User tidak ditemukan"})
    res.status(200).json(user);
}

const logOut = (req, res) => {
    req.session.destroy((err) => {
        if(err) return res.status(400).json({msg: "Tidak dapat Logout"});
        res.status(200).json({msg: "Anda telah logout"})
    })
}


module.exports = { Login, Me, logOut };