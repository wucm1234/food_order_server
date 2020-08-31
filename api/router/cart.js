const express = require("express");
const router = express.Router();
const CartController = require("../controller/cart");
const auth = require("../middleware/check-auth");

router.post("/item", auth, CartController.add_item);

module.exports = router;