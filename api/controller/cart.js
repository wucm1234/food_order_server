const Cart = require("../model/cart");
const mongoose = require("mongoose");

exports.add_item = async (req, res) => {
  try {
    let cart = await Cart.findOne({ userId: req.userData.userId });
    const data = req.body;

    if (cart) {
      //cart exists for user
      let itemIndex = cart.products.findIndex((p) => p.product == data.product);

      if (itemIndex > -1) {
        //product exists in the cart, update the quantity
        let productItem = cart.products[itemIndex];
        productItem.quantity = data.quantity;
        cart.products[itemIndex] = productItem;
      } else {
        //product does not exists in cart, add new item
        cart.products.push({
          product: data.product,
          quantity: data.quantity,
          name: data.name,
          price: data.price,
        });
      }
      cart = await cart.save();
      return res.status(201).send(cart);
    } else {
      //no cart for user, create new cart
      const newCart = await Cart.create({
        _id: mongoose.Types.ObjectId(),
        userId: req.userData.userId,
        products: [{
            
            product: data.product,
            quantity: data.quantity,
            name: data.name,
            price: data.price,
          }],
      });

      return res.status(201).send(newCart);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};
