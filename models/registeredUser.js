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
        country: {type: String, min: 2, max: 2, required: true},//how to transform user input into alpha2 code?
        city: {type: String, min: 2, max: 2, required: true} //how to transform user input into alpha2 code?
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


//Ben's example of our User schema
// email
// password
// nickname
// lastLogin: timestamp
// status: enum ['online', 'offline']
// location: {
//   country: ISO alpha2 code
//   city: ?
// }
// languages: [ISO alpha2 code]
// meetings: [{
//  talkedTo: ObjectId()
//   start: timestamp
//   end: timestamp
// }]

// OPTIONAL:
// favoriteUsers: [ObjectId()]
// blockedUsers: [ObjectId()]

