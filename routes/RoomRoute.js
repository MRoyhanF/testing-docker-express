import express from "express";
import {
    getRoom,
    getRoomById,
    createRoom,
    updateRoom,
    deleteRoom
} from "../controllers/Room.js"
// import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/Rooms', getRoom);
router.get('/Room/:id', getRoomById);
router.post('/Room/', createRoom);
router.patch('/Room/:id', updateRoom);
router.delete('/Room/:id', deleteRoom);

// router.get('/users', verifyUser, adminOnly, getUsers);
// router.get('/users/:id', verifyUser, adminOnly, getUserById);
// router.post('/users/', verifyUser, adminOnly, createUser);
// router.patch('/users/:id', verifyUser, adminOnly, updateUser);
// router.delete('/users/:id', verifyUser, adminOnly, deleteUser);

export default router;