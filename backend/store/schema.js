// Import required modules
const express = require('express');
const mongoose = require('mongoose');

// Define the schemas
const shippingDetailsSchema = new mongoose.Schema({
  // ...
});

const productSchema = new mongoose.Schema({
  // ...
});

const userSchema = new mongoose.Schema({
  // ...
});

// Define the models
const ShippingDetails = mongoose.model('ShippingDetails', shippingDetailsSchema);
const Product = mongoose.model('Product', productSchema);
const User = mongoose.model('User', userSchema);

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true });

// Create a new shipping detail record
const app = express();

app.post('/shipping-details', async (req, res) => {
  try {
    const { address, country, zipcode, state, city, shippingDate, products, userId, totalPrice } = req.body;

    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send('User not found');
    }

    // Create an array of product IDs
    const productIds = products.map((product) => {
      return mongoose.Types.ObjectId(product);
    });

    // Check if the products exist
    const existingProducts = await Product.find({ _id:{ $in: productIds } });
    if (existingProducts.length !== productIds.length) {
      return res.status(404).send('One or more products not found');
    }
    
    // Create the new shipping details record
    const shippingDetails = new ShippingDetails({
      address,
      country,
      zipcode,
      state,
      city,
      shippingDate,
      products: productIds,
      userId,
      totalPrice
    });
    
    // Save the record to the database
    await shippingDetails.save();
    
    res.status(201).send('Shipping details created successfully');
} catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while creating the shipping details');
    }
});
    
// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
