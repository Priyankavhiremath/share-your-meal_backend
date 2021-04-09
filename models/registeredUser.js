const mongoose = require("mongoose");
const jwt = require('jsonwebtoken')

const Schema = mongoose.Schema;

const registeredUserSchema = new mongoose.Schema({
    email: { type: String, required: true, min: 3 , max: 100, unique: true },
    password: { type: String, required: true, min: 8, max: 128 },
    nickName: {type: String, min: 2, max: 50, required: true, unique: true},
    lastLogin: { type: Date, default: Date.now },
    status: { type: String, enum: ['online', 'offline'], default: 'offline' },
    location: {
        country: {type: String, min: 2, max: 2, required: true},
        city: {type: String, min: 2, max: 2, required: true} 
    },
    languages : [{type: String, min: 2, max: 2, required: true}],
    meetings: [{ type: Schema.Types.ObjectId, ref: 'Meeting' }]
});

registeredUserSchema.methods.createToken = function () {
    const payload = { _id: this._id, email: this.email }
    const secretKey = process.env.JWT_SECRET;
    const token = jwt.sign(payload, secretKey)
    return token
}

const RegisteredUser = mongoose.model('Register', registeredUserSchema);

module.exports = RegisteredUser;

// OPTIONAL:
// favoriteUsers: [ObjectId()]
// blockedUsers: [ObjectId()]

