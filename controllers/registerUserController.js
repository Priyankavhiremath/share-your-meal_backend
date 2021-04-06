const RegisteredUser = require('../models/registeredUser')

// READ
const getAllUsers = async(req, res, next) => {
    try{
        const getUsers = await RegisteredUser.find([])
        res.json(getUsers)

    }catch(e){
        res.status(500).send(e.message)
    }
}
// READ
const getOneUser = async(req, res, next) => {
    const { id } = req.params;
    try{
        const getUser = await RegisteredUser.findById({ _id: id })
        if (!getUser) return res.status(404).send("No such user")
        res.json(getUser)
    } catch(e){
        res.status(500).send(e.message)
    }
}

// CREATE
const createOneUser = async (req, res, next) => {
    const { email, password, nickName, location, languages } = req.body;
    try{
        const createUser = await RegisteredUser.create({ email, password, nickName, location, languages })
        res.json(createUser)
    }catch(e){
        res.status(500).send(e.message)
    }
}

// UPDATE
const updateOneUser = async (req, res, next) => {
    const { email, password, nickName, location, languages } = req.body;
    try{
        const updateUser = await RegisteredUser.create({ email, password, nickName, location, languages })
        res.json(updateUser)
    }catch(e){
        res.status(500).send(e.message)
    }
}

// DELETE


module.exports = { getAllUsers, getOneUser, createOneUser}