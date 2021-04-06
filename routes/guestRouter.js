var express = require('express');
var router = express.Router();

const { getAllGuests, createOneGuest } = require('../controllers/guestController')

router.get('/', getAllGuests)

router.post('/', createOneGuest)

module.exports = router;