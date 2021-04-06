const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const meetingSchema = new Schema({
    emitter: { type: Schema.Types.ObjectId, required: true }, //is emitter a guest or register user?
    receiver: { type: Schema.Types.ObjectId, required: true },
    start: { type: Date, default: Date.now },
    end: { type: Date } // how to get this time?
}) 

const Meeting = mongoose.model('Meeting', meetingSchema)
module.exports = Meeting;