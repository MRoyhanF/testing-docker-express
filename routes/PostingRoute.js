const express = require('express');
const {
    getPosting,
    createPosting,
    deletePosting
} = require('../controllers/Posting.js');
const { verifyUser, adminOnly } = require('../middleware/AuthUser.js');

const router = express.Router();

router.get('/Posting', verifyUser,  getPosting);
router.post('/Posting/', verifyUser, createPosting);
router.delete('/Posting/:id',verifyUser, adminOnly, deletePosting);

module.exports = router;