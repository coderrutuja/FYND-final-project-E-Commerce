const express = require('express');
const router = express.Router();
const Order = require('../models/order');

router.post('/', async (req, res, next) => {
  const { email, address, items, total } = req.body;
  const order = new Order({
    email,
    address,
    items,
    total
  });
  try {
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
