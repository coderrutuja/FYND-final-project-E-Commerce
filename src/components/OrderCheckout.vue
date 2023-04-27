<script>
  export default {
    data() {
      return {
        email: '',
        address: '',
        total: 0
      };
    },
    mounted() {
      this.total = this.$store.state.cart.total;
    },
    methods: {
      async placeOrder() {
        const items = this.$store.state.cart.items.map(item => {
          return {
            product: item.product,
            quantity: item.quantity
          };
        });
        const response = await fetch('/api/orders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: this.email,
            address: this.address,
            items: items,
            total: this.total
          })
        });
        const order = await response.json();
        this.$store.commit('clearCart');
        this.$router.push('/order/' + order._id);
      }
    }
  };
</script>
  
<template>
    <div>
      <h1>Checkout</h1>
      <form @submit.prevent="placeOrder">
        <div>
          <label for="email">Email:</label>
          <input id="email" v-model="email" required>
        </div>
        <div>
          <label for="address">Address:</label>
          <textarea id="address" v-model="address" required></textarea>
        </div>
        <div>
          <label for="total">Total:</label>
          <input id="total" v-model="total" readonly>
        </div>
        <div>
          <button type="submit">Place Order</button>
        </div>
      </form>
    </div>
</template>
  
  