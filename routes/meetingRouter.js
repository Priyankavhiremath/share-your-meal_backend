var express = require('express');
var router = express.Router();

const { getAllMeetings } = require('../controllers/meetingController')

router.get('/', getAllMeetings)

module.exports = router;