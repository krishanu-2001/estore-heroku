const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    itemname: {type: String, require: true},
    description: { type: String, required: true },
    price: {type: Number, required: true},
    quantity: {type: Number},
    },
    {
        collection: 'items1812'
    }
);

const Items = mongoose.model('Items', itemSchema);

module.exports = Items;