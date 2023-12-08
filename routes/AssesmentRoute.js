const express = require('express');
const {
    getAssesments,
    createAssesment,
    // getAssesmentByIdRoom,
    deleteAssesment,
    // getAssesmentByRoomAndUser
} = require('../controllers/Assesment.js');
const { verifyUser } = require('../middleware/AuthUser.js');

const router = express.Router();

router.get('/Assesments', verifyUser, getAssesments);
router.post('/Assesment/', verifyUser, createAssesment);
// router.get('/Assesment/Room/:id', verifyUser, getAssesmentByIdRoom);
router.delete('/Assesment/:id', verifyUser, deleteAssesment);
// router.get('/Assesment/Room/User/:id', verifyUser, getAssesmentByRoomAndUser);

module.exports = router;