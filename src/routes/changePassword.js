const express = require('express');
const router = express.Router();
const { handelChangePassword } = require('../controllers/changePassword');


router.route('/:hotelId/:_id')
    .put(handelChangePassword);
    
module.exports = router;