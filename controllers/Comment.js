const Comment = require ('../models/CommentModel.js');
const User = require ('../models/UserModel.js');
const Posting = require ('../models/PostingModel.js');
const { Op } = require ('sequelize');

// 1- untuk menempilkan semua koment pada postingan
const getCommentByIdPosting = async(req, res) =>{
    try {
        const comment = await Posting. findOne({
            where: {
                uuid: req.params.id
            }
        });
        if(!comment) return res.status(404).json({msg : "Postingan tidak ditemukan"})
        let response;
        if(req){
            response = await Comment.findAll({
                attributes:['uuid','id','comment'],
                include: [{
                    model: User,
                    attributes: ['id','name']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

// 2- untuk membuat comentar pada postingan
const createComment = async(req, res) =>{
    const {comment} = req.body;
    const comm = req.params.id;
    try {
        const commentt = await Posting. findOne({
            where: {
                id: comm
            }
        });
        if(!commentt) return res.status(404).json({msg : "Postingan tidak ditemukan"})
        await Comment.create({
            comment: comment,
            userId: req.userId,
            postingId : comm
        });
        res.status(201).json({msg: "Comment Created Succesfully"})
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

// 3- menghapus komentar pada postingan orang
const deleteComment = async(req, res) =>{
    try {
        const comment = await Comment.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if(!comment) return res.status(404).json({msg : "Data tidak ditemukan"})
        // const {name, price} = req.body;
        if(req.role === "admin"){
            await Comment.destroy({
                where: {
                    id: comment.id
                }
            });
        }else{
            if(req.userId !== comment.userId) return res.status(403).json({msg: "Akses Terlarang"})
            await Comment.destroy({
                where:{
                    [Op.and]:[{id: comment.id}, {userId: req.userId}]   
                }
            });
        }
        res.status(200).json({msg: "Product Deleted Succesfully"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

module.exports = {getCommentByIdPosting, createComment, deleteComment};


