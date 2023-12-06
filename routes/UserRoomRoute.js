import express from "express";
import {
    getUsersRoom,
    getUserRoomById,
    createUserRoom,
    updateUserRoom,
    deleteUserRoom
} from "../controllers/UserRoom.js"
// import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/usersRoom', getUsersRoom);
router.get('/user/Room/:id', getUserRoomById);
router.post('/user/Room/', createUserRoom);
router.patch('/user/Room/:id', updateUserRoom);
router.delete('/user/Room/:id', deleteUserRoom);

// router.get('/users', verifyUser, adminOnly, getUsers);
// router.get('/users/:id', verifyUser, adminOnly, getUserById);
// router.post('/users/', verifyUser, adminOnly, createUser);
// router.patch('/users/:id', verifyUser, adminOnly, updateUser);
// router.delete('/users/:id', verifyUser, adminOnly, deleteUser);

export default router;