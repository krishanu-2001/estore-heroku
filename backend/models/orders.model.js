const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ordersSchema = new Schema({
    user_id: String,
    username: String,
    order:{
        type: Array,
        default:[],
    },
    state: String

},{collection: 'orders129',
    timestamps: true
});

const Order = mongoose.model('Order', ordersSchema);

module.exports = Order;