const mongoose = require('mongoose');

const shippingDetailsSchema = new mongoose.Schema({
  address: { type: String, required: true },
  country: { type: String, required: true },
  zipcode: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  shippingDate: { type: Date, required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  totalPrice: { type: Number, required: true }
});

const ShippingDetails = mongoose.model('ShippingDetails', shippingDetailsSchema);

module.exports = ShippingDetails;
