const express = require('express');
const {
    getRoom,
    getRoomById,
    createRoom,
    updateRoom,
    deleteRoom
} = require('../controllers/Room.js');
// import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/Rooms', getRoom);
router.get('/Room/:id', getRoomById);
router.post('/Room/', createRoom);
router.patch('/Room/:id', updateRoom);
router.delete('/Room/:id', deleteRoom);


module.exports = router;