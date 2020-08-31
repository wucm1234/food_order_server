const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    location: {
        type: String,
    },
    cartItems:[
        {
            item: {
                type: mongoose.Schema.Types.ObjectId,
            },
            count: Number
        }
    ]
})

module.exports = mongoose.model("User", userSchema);