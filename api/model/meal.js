const mongoose = require("mongoose");

const mealSchema = mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        name:{
            type: String
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "categories"
        },
        image: {
            type: String
        },
        price: {
            type: Number
        },
        description: {
            type: String
        },
        stock: {
            type: Number
        }
    }
)

module.exports = mongoose.model("Meal", mealSchema);