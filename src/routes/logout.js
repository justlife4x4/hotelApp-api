const express = require('express');
const router = express.Router();
const { handelLogout } = require('../controllers/logout');

router.route('/:hotelId/:_id')
    .delete(handelLogout);

module.exports = router;