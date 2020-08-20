const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    basket:{
        type: Array,
        default:[],
    }

},{collection: 'users1812',
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;