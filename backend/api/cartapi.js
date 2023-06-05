const express = require('express');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Define the schema for a product
const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number
});

// Define the schema for a shopping cart item
const cartItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  },
  quantity: Number
});

// Define the schema for a shopping cart
const cartSchema = new mongoose.Schema({
  items: [cartItemSchema]
});

// Define the models for the product, cart item, and cart
const Product = mongoose.model('Product', productSchema);
const CartItem = mongoose.model('CartItem', cartItemSchema);
const Cart = mongoose.model('Cart', cartSchema);

// Create the Express app
const app = express();

// Parse JSON request bodies
app.use(express.json());

// Define routes for fetching products and adding products to the shopping cart
app.get('/api/products', async (req, res) => {
  try {
    // Fetch all products
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send('Error fetching products');
  }
});

app.post('/api/cart', async (req, res) => {
  try {
    const productId = req.body.productId;
    const quantity = req.body.quantity || 1;

    // Fetch the product by ID
    const product = await Product.findById(productId);

    if (!product) {
      res.status(404).send('Product not found');
      return;
    }

    // Create or update the shopping cart item
    let cart = await Cart.findOne({});
    if (!cart) {
      cart = new Cart();
    }

    const cartItem = cart.items.find((item) => item.productId.equals(productId));
    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      cart.items.push(new CartItem({
        productId: productId,
        quantity: quantity
      }));
    }

    // Save the updated shopping cart
    await cart.save();

    res.json(cart);
  } catch (error) {
    console.error('Error adding item to cart:', error);
    res.status(500).send('Error adding item to cart');
  }
});

// Define routes for fetching the shopping cart and removing items from the shopping cart
app.get('/api/cart', async (req, res) => {
  try {
    // Fetch the shopping cart
    const cart = await Cart.findOne({}).populate('items.productId');
    res.json(cart.items);
  } catch (error) {
    console.error('Error fetching shopping cart:', error);
    res.status(500).send('Error fetching shopping cart');
  }
});

app.delete('/api/cart/:itemId', async (req, res) => {
  try {
    const itemId = req.params.itemId;

    // Find the shopping cart item by ID and remove it
    const cart = await Cart.findOne({});
    const index = cart.items.findIndex((item) => item._id.equals(itemId));
    cart.items.splice(index, 1);

    // Save the updated shopping cart
    await cart.save();

    res.sendStatus(204);
  } catch (error) {
    console.error('Error removing item from cart:', error);
    res.status(500).send('Error removing item from cart');
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
console.log(`Server listening on port ${port}`);
});

