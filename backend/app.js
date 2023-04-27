const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect to the database
mongoose.connect('mongodb://localhost/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Require the models
const ShippingDetails = require('./models/shippingDetails');
const Product = require('./models/product');
const User = require('./models/user');

// Define the routes and middleware
// ...
