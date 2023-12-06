import Assesment from "../models/AssesmentModel.js";
import User from "../models/UserModel.js";
import { Op } from "sequelize";

// 1 = ambil data per Id untuk histori user
// start get all Assesment
export const getAssesments = async(req, res) =>{
    try {
        let response;
        if(req.role === "admin"){
            response = await Assesment.findAll({
                attributes:['uuid', 'type_assesment','value_assesment','result', 'createdAt'],
                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }else{
            response = await Assesment.findAll({
                attributes:['uuid', 'type_assesment','value_assesment','result', 'roomId', 'createdAt'],
                where:{
                    userId: req.userId
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}
// End get all Assesment

// 2 = diguanakn untuk mengambil data dari model ml
// start create Assesment
export const createAssesment = async(req, res) =>{
    const {type_assesment, value_assesment, result} = req.body;
    try {
        await Assesment.create({
            type_assesment: type_assesment,
            value_assesment: value_assesment,
            result: result,
            userId: req.userId
        });
        res.status(201).json({msg: "Berkas Berhasil Di Simpan"})
    } catch (error) {
        res.status(500).json({msg: error.message});
    }    
}
// End create Assesment

// 3 = digunakan untuk monitoring assesment member room
// Start mencari assesmeny dari id room
export const getAssesmentByIdRoom = async(req, res) =>{

}
// End mencari assesmeny dari id room


// 4 = digunakan untuk menghapus histori assesment data
// Start Delete assesment
export const deleteAssesment = async(req, res) =>{
    try {
        const assesment = await Assesment.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if(!assesment) return res.status(404).json({msg : "Data tidak ditemukan"})
        const {type_assesment, value_assesment, result} = req.body;
        if(req.role === "admin"){
            await Assesment.destroy({
                where: {
                    id: assesment.id
                }
            });
        }else{
            if(req.userId !== assesment.userId) return res.status(403).json({msg: "Akses Terlarang"})
            await Assesment.destroy({
                where:{
                    [Op.and]:[{id: assesment.id}, {userId: req.userId}]   
                }
            });
        }
        res.status(200).json({msg: "Berkas Berhasil Di Hapus.."});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}
// End Delete assesment

// 5 = digunakan untuk mengambil data pribadi user di room 
// Start mencari assesment per id room dan user
export const getAssesmentByRoomAndUser = (req, res) =>{

}
// Start mencari assesment per id room dan user
