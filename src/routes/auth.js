const express = require('express');
const router = express.Router();
const { handleLogin, handelOtpLogin } = require('../controllers/auth');

router.route('/:hotelId')
    .post(handleLogin)
    .put(handelOtpLogin)

module.exports = router;