const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
      _id: mongoose.Schema.Types.ObjectId,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    products: [
      {
        product: mongoose.Schema.Types.ObjectId,
        quantity: Number,
        name: String,
        price: Number
      }
    ],
    active: {
      type: Boolean,
      default: true
    },
    modifiedOn: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);