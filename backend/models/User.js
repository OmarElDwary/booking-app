const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    password: String,
    email: {type: String, unique: true},
    country: String,
    address: String
});

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;
