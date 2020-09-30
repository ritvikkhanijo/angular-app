// import Mongoose (MongoDB ODM) as a const
const mongoose = require('mongoose');

// create an object with th user auth data
const userSchema = mongoose.Schema({
    email: String,
    password: String,
    isAdmin: Number
});

// export it as a model (as in Django)
module.exports = mongoose.model('User', userSchema);