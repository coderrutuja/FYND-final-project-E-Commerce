<template>
    <form @submit.prevent="createShippingDetails">
      <div>
        <label for="address">Address</label>
        <input type="text" id="address" v-model="address" required>
      </div>
      <div>
        <label for="country">Country</label>
        <input type="text" id="country" v-model="country" required>
      </div>
      <div>
        <label for="zipcode">Zipcode</label>
        <input type="text" id="zipcode" v-model="zipcode" required>
      </div>
      <div>
        <label for="state">State</label>
        <input type="text" id="state" v-model="state" required>
      </div>
      <div>
        <label for="city">City</label>
        <input type="text" id="city" v-model="city" required>
      </div>
      <div>
        <label for="shipping-date">Shipping Date</label>
      <input type="date" id="shipping-date" v-model="shippingDate" required>
    </div>
    <div>
      <label for="products">Products</label>
      <select id="products" v-model="selectedProducts" multiple required>
        <option v-for="product in products" :key="product._id" :value="product._id">{{ product.name }}</option>
      </select>
    </div>
    <div>
      <label for="total-price">Total Price</label>
      <input type="number" id="total-price" v-model="totalPrice" required>
    </div>
    <button type="submit">Create Shipping Details</button>
  </form>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      address: '',
      country: '',
      zipcode: '',
      state: '',
      city: '',
      shippingDate: '',
      products: [],
      selectedProducts: [],
      totalPrice: 0
    };
  },
  async mounted() {
    try {
      // Get the list of products from the backend
      const response = await axios.get('http://localhost:3000/products');
  this.products = response.data;
} catch (error) {
  console.error(error);
}
},
methods: {
async createShippingDetails() {
try {
// Convert the selected product IDs to an array
const productIds = Array.from(this.selectedProducts);
    // Send a POST request to the backend with the shipping details data
    await axios.post('http://localhost:3000/shipping-details', {
      address: this.address,
      country: this.country,
      zipcode: this.zipcode,
      state: this.state,
      city: this.city,
      shippingDate: this.shippingDate,
      productIds,
      totalPrice: this.totalPrice
    });

    // Reset the form
    this.address = '';
    this.country = '';
    this.zipcode = '';
    this.state = '';
    this.city = '';
    this.shippingDate = '';
    this.selectedProducts = [];
    this.totalPrice = 0;

    alert('Shipping details created successfully');
  } catch (error) {
    console.error(error);
    alert('An error occurred while creating the shipping details');
  }
}
}
};
</script>
