const express = require('express');
const router = express.Router();

const OrderController = require('../controller/order');

router.post("/item", OrderController.create_order);

module.exports = router;