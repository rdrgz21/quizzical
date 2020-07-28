const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please tell us your name']
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please choose a password']
    },
    score: {
        type: Number
    },
    time: {
        type: Number
    }
});

module.exports = mongoose.model('User', userSchema);