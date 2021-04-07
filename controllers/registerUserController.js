const RegisteredUser = require('../models/registeredUser')
const bcrypt = require('bcrypt')

// READ
const getAllUsers = async (req, res, next) => {
    // console.log(req.headers)
    try{
        const getUsers = await RegisteredUser.find()
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
// const createOneUser = async (req, res, next) => {
//     const { email, password, nickName, location, languages } = req.body;
//     try{
//         const createUser = await RegisteredUser.create({ email, password, nickName, location, languages })
//         res.json(createUser)
//     }catch(e){
//         res.status(500).send(e.message)
//     }
// }
const createOneUser = async (req, res, next) => {
    const { email, password, nickName, location, languages } = req.body;
    try{
        const newUser = new RegisteredUser({ email, nickName, location, languages, password: await bcrypt.hash(password, 10) })
        await newUser.save()

        const token = newUser.createToken()
        res.set('x-authorization-token', token).send('User created successfully')
    } catch (e) {
        res.status(500).send(e.message)
    }
}

// UPDATE
const updateEmail = async (req, res, next) => {
    const { oldEmail, newEmail } = req.body;
    try{
        const updateUser = await RegisteredUser.findOneAndUpdate({"email": oldEmail}, {"email": newEmail}, {new: true})
        res.json(updateUser)
    }catch(e){
        res.status(500).send(e.message)
    }
}

const updateNickName = async (req, res, next) => {
    const { oldNickname, newNickName } = req.body;
    console.log(req.body)
    try{
        const updateUser = await RegisteredUser.findOneAndUpdate({"nickName": oldNickname}, {"nickName": newNickName}, {new: true})
        res.json(updateUser)
    }catch(e){
        res.status(500).send(e.message)
    }
}

const updateLocation = async (req, res, next) => {
    const { oldLocation, newLocation } = req.body;
    try{
        const updateUser = await RegisteredUser.findOneAndUpdate({"location": oldLocation}, {"location": newLocation}, {new: true})
        res.json(updateUser)
    }catch(e){
        res.status(500).send(e.message)
    }
}

const updateLanguages = async (req, res, next) => {
    const { oldLanguages, newLanguages } = req.body;
    try{
        const updateUser = await RegisteredUser.findOneAndUpdate({"languages": oldLanguages}, {"languages": newLanguages}, {new: true})
        res.json(updateUser)
    }catch(e){
        res.status(500).send(e.message)
    }
}

// DELETE
const deleteOneUser = async (req, res) => {
    const { id } = req.params
    try {
        const deletedUser = await RegisteredUser.findByIdAndDelete(id)
        if (!deletedUser) res.status(404).send('No such user')
        res.json(deletedUser)
    } catch (e) {
        res.status(500).send(e.message)
    }
}


module.exports = {
    getAllUsers,
    getOneUser,
    createOneUser,
    updateEmail,
    updateNickName,
    updateLocation,
    updateLanguages,
    deleteOneUser
}