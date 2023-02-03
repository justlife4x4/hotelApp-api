const express = require('express');
const router = express.Router();
const { handelFind } = require('../controllers/users');

//handel search user
//query string : hotel id / user name

router.route('/:hotelId/:search')
    .get(handelFind);

module.exports = router;