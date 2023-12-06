import express from "express";
import {
    getCommentByIdPosting,
    createComment,
    deleteComment
} from "../controllers/Comment.js"
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/Comment/Posting/:id', verifyUser, getCommentByIdPosting);
router.post('/Comment/Posting/:id',verifyUser, createComment);
router.delete('/Comment/:id',verifyUser, deleteComment);

export default router;