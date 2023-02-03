const express = require('express');
const router = express.Router();
const { handleRefreshToken } = require('../controllers/refreshToken');

// router.get('/:hotelId', handleRefreshToken);
router.get('/', handleRefreshToken);
module.exports = router;