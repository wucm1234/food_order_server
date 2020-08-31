const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const user = require("./user");
const meal = require("./meal");
const order = require("./order");
const cart = require("./cart");

router.use("/user", user);
router.use("/meal", meal);
router.use("/order", order);
router.use("/cart", cart);


module.exports = router;