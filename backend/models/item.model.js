const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    itemname: {type: String, require: true},
    description: { type: String, required: true },
    price: {type: Number, required: true},
    },
    {
        timestamps: true,
    }
);

const Items = mongoose.model('Items', itemSchema);

module.exports = Items;