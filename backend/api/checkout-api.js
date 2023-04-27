const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Product = require('./models/product');
const Cart = require('./models/cart');
const Order = require('./models/order');

mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true });

const app = express();

app.use(bodyParser.json());

app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send('Error fetching products');
  }
});

app.get('/api/cart', async (req, res) => {
  try {
    const cart = await Cart.findOne();
    res.json(cart);
  } catch (error) {
    console.error('Error fetching cart:', error);
    res.status(500).send('Error fetching cart');
  }
});

app.post('/api/cart/items', async (req, res) => {
    const productId = req.body.productId;
    const quantity = req.body.quantity;
  
    try {
      let cart = await Cart.findOne();
      if (!cart) {
        cart = new Cart();
      }
  
      const index = cart.items.findIndex(item => item.product == productId);
      if (index === -1) {
        cart.items.push({
          product: productId,
          quantity: quantity
        });
      } else {
        cart.items[index].quantity += quantity;
      }
  
      await cart.save();
      res.send(cart);
    } catch (error) {
      console.error('Error adding item to cart:', error);
      res.status(500).send('Error adding item to cart');
    }
});
  
app.delete('/api/cart/items/:productId', async (req, res) => {
    const productId = req.params.productId;
  
    try {
      let cart = await Cart.findOne();
      if (!cart) {
        res.status(404).send('Cart not found');
        return;
      }
  
      const index = cart.items.findIndex(item => item.product == productId);
      if (index === -1) {
        res.status(404).send('Item not found in cart');
        return;
      }
  
      cart.items.splice(index, 1);
  
      await cart.save();
      res.send(cart);
    } catch (error) {
      console.error('Error removing item from cart:', error);
      res.status(500).send('Error removing item from cart');
    }
});
  
app.post('/api/orders', async (req, res) => {
    const email = req.body.email;
    const address = req.body.address;
    const items = req.body.items;
    const total = req.body.total;
  
    try {
      const order = new Order({
        email: email,
        address: address,
        items: items,
        total: total
      });
      await order.save();
  
      let cart = await Cart.findOne();
      if (cart) {
        cart.items = [];
        await cart.save();
      }
  
      res.send(order);
    } catch (error) {
      console.error('Error placing order:', error);
      res.status(500).send('Error placing order');
    }
});
  
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
  