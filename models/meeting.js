const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const meetingSchema = new Schema({
    emitter: { type: ObjectId, required: true }, //is emitter guest or register user?
    receiver: { type: ObjectId, required: true },
    start: { type: Date, default: Date.now },
    end: { type: Date } // how to get this time?
}) 

const Meeting = mongoose.model('Meeting', meetingSchema)
module.exports = Meeting;