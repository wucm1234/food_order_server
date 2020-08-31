const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    price: {
        type: Number,
    },
    create_time: {
        type: Date,
        default: Date.now()
    },
    items: [{
        item: {
            type:  mongoose.Schema.Types.ObjectId,
        },
        count: Number
    }],
    address: {
        type: String
    }, 
    status: {
        type: String
    }
})

module.exports = mongoose.model("Order", orderSchema);