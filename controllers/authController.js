const RegisteredUser = require('../models/registeredUser')
const bcrypt = require('bcrypt')

const login = async (req, res, next) => {
    const { email, password } = req.body
    let user = await RegisteredUser.findOne({ email })
    if (!user) return res.status(400).send('Invalid Credentials')
    
    const match = await bcrypt.compare(password, user.password)
    if (!match) return res.status(400).send(`Invalid Credentials`)
    
    const token = user.createToken()
    res.set('x-authorization-token', token).send('User logged in successfully')
    // res.send(token)
}

module.exports = { login }
