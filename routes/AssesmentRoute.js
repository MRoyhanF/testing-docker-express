import express from "express";
import {
    getAssesments,
    createAssesment,
    getAssesmentByIdRoom,
    deleteAssesment,
    getAssesmentByRoomAndUser
} from "../controllers/Assesment.js"
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/Assesments', verifyUser, getAssesments);
router.post('/Assesment/', verifyUser, createAssesment);
router.get('/Assesment/Room/:id', verifyUser, getAssesmentByIdRoom);
router.delete('/Assesment/:id', verifyUser, deleteAssesment);
router.get('/Assesment/Room/User/:id', verifyUser, getAssesmentByRoomAndUser);

export default router;