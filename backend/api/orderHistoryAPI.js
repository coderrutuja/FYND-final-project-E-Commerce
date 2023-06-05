const express = require('express');
const router = express.Router();
const Order = require('../models/order');

router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.find().sort({ date: -1 });
    res.json(orders);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
