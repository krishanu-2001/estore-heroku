const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String
},{collection: 'users1812'});

const User = mongoose.model('User', userSchema);

module.exports = User;