
const mongoose = require('mongoose');

const userSchema = {
    'username': String,
    'password': String,
    'firstname': String,
    'lastname': String
    
};


module.exports = mongoose.model('User', userSchema);