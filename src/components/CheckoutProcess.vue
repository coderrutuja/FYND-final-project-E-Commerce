<script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        items: [],
        email: '',
        address: ''
      };
    },
    computed: {
      total() {
        return this.items.reduce((acc, item) => acc + item.total, 0);
      }
    },
    mounted() {
      this.fetchCart();
    },
    methods: {
      fetchCart() {
        axios.get('/api/cart')
          .then(response => {
            this.items = response.data.items;
          })
          .catch(error => {
            console.error('Error fetching cart:', error);
          });
      },
      checkout() {
        const order = {
          email: this.email,
          address: this.address,
          items: this.items.map(item => ({
            productId: item.product._id,
            quantity: item.quantity,
            price: item.product.price
          })),
          total: this.total
        };
        axios.post('/api/orders', order)
          .then(response => {
            alert('Order placed successfully!');
            this.$router.push('/');
          })
          .catch(error => {
            console.error('Error placing order:', error);
          });
      }
    }
  };
</script>
  
<template>
    <div>
      <h1>Checkout</h1>
      <div v-if="items.length === 0">
        <p>Your cart is empty.</p>
      </div>
      <div v-else>
        <ul>
          <li v-for="(item, index) in items" :key="index">
            {{ item.product.name }} - {{ item.quantity }} x ${{ item.product.price }} = ${{ item.total }}
          </li>
        </ul>
        <p>Total: ${{ total }}</p>
        <form @submit.prevent="checkout">
          <label>
            Email:
            <input type="email" v-model="email" required>
          </label>
          <label>
            Shipping Address:
            <textarea v-model="address" required></textarea>
          </label>
          <button type="submit">Checkout</button>
        </form>
      </div>
    </div>
</template>
  
  