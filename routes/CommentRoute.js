const express = require('express');
const {
    getCommentByIdPosting,
    createComment,
    deleteComment
} = require('../controllers/Comment.js');
const { verifyUser } = require('../middleware/AuthUser.js');

const router = express.Router();

router.get('/Comment/Posting/:id', verifyUser, getCommentByIdPosting);
router.post('/Comment/Posting/:id',verifyUser, createComment);
router.delete('/Comment/:id',verifyUser, deleteComment);

module.exports = router;