const mongoose = require("mongoose");


const guestSchema = new mongoose.Schema({
    nickName : {type: String, min: 2, max: 50, required: true},
    languages : [{type: String, min: 2, max: 2, required: true}],//how to transform user input into alpha2 code?
    location: {
        country: {type: String, min: 2, max: 2, required: true},//how to transform user input into alpha2 code?
        city: {type: String, min: 2, max: 2, required: true} //how to transform user input into alpha2 code?
    } 
});

const Guest = mongoose.model('Guest', guestSchema);

module.exports = Guest;
