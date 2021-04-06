const mongoose = require("mongoose");
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
    //why is this crashing?
});

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

