const Posting = require ('../models/PostingModel.js');
const User = require ('../models/UserModel.js');

// Start Get All Postingan
const getPosting = async(req, res) =>{
    try {
        let response;
        if (req){
            response = await Posting.findAll({
                attributes:['uuid','id','posting'],
                include: [{
                    model: User,
                    attributes: ['id','name', 'email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}
// End Get All Postingan

// Start Create Postingan
const createPosting = async(req, res) =>{
    const {posting} = req.body;
    try {
        await Posting.create({
            posting: posting,
            userId: req.userId
        });
        res.status(201).json({msg: "Postingan Berhasil Dibuat"})
    } catch (error) {
        res.status(500).json({msg: error.message});
    } 
}
// End Create Postingan

// Start Delete Postingan
const deletePosting = async(req, res) =>{
    try {
        const postingan = await Posting.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if(!postingan) return res.status(404).json({msg : "Postingan tidak ditemukan"})
        const {posting} = req.body;
        if(req.role === "admin"){
            await Posting.destroy({
                where: {
                    id: postingan.id
                }
            });
        }else{
            if(req.userId !== postingan.userId) return res.status(403).json({msg: "Kamu Tidak Memiliki Akses"})
            await Posting.destroy({
                where:{
                    [Op.and]:[{id: postingang.id}, {userId: req.userId}]   
                }
            });
        }
        res.status(200).json({msg: "Product Deleted Succesfully"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}
// End Delete Postingan

module.exports = {getPosting, createPosting, deletePosting};