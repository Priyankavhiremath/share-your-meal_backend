const Guest = require("../models/guest") //do we need to capitalize guest and other models?

const getAllGuests = async (req, res, next) => {
    try {
        const getGuest = await Guest.find([])
        res.json(getGuest)
    } catch (e) {
        res.status(500).send(e.message)
    }
}

const createOneGuest = async (req, res, next) => {
    const { nickName, languages, location } = req.body;
    try{
        const createGuest = await Guest.create({ nickName, languages, location })
        res.json(createGuest)
    }catch(e){
        res.status(500).send(e.message)
    }
}

// do we need delte function for a guest? do we even store this info in the back end?
module.exports = { getAllGuests, createOneGuest }