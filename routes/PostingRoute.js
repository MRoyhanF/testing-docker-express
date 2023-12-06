import express from "express";
import {
    getPosting,
    createPosting,
    deletePosting
} from "../controllers/Posting.js"
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/Posting', verifyUser,  getPosting);
router.post('/Posting/', verifyUser, createPosting);
router.delete('/Posting/:id',verifyUser, adminOnly, deletePosting);

export default router;