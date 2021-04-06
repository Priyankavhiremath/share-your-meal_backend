// do we need meeting controller? if yes, why?
const Meeting = require('../models/meeting')

const getAllMeetings = async (req, res, next) => {
    try {
        const getMeetings = await Meeting.find([])
        res.json(getMeetings)
    }catch(e){
        res.status(500).send(e.message)
    }
}

module.exports = { getAllMeetings }