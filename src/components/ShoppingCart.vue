<script>
  export default {
    name: 'ShoppingCart',
    data() {
      return {
        items: []
      };
    },
    computed: {
      cartTotal() {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
      }
    },
    methods: {
      removeItem(item) {
        // Call the backend API to remove the item from the shopping cart
        fetch(`/api/cart/${item.id}`, {
          method: 'DELETE'
        })
        .then((response) => {
          if (response.ok) {
            // Remove the item from the items array in the component's data
            const index = this.items.findIndex((i) => i.id === item.id);
            this.items.splice(index, 1);
          }
        })
        .catch((error) => {
          console.error('Error removing item from cart:', error);
        });
      },
      checkout() {
        // Call the backend API to complete the checkout process
        fetch('/api/checkout', {
          method: 'POST'
        })
        .then((response) => {
          if (response.ok) {
            // Clear the items array in the component's data
            this.items = [];
            alert('Checkout successful!');
          } else {
            alert('Checkout failed.');
          }
        })
        .catch((error) => {
          console.error('Error checking out:', error);
          alert('Checkout failed.');
        });
      }
    },
    mounted() {
      // Call the backend API to fetch the shopping cart items
      fetch('/api/cart')
        .then((response) => response.json())
        .then((items) => {
          this.items = items;
        })
        .catch((error) => {
          console.error('Error fetching shopping cart items:', error);
        });
    }
  };
</script>
  
<template>
    <div class="shopping-cart">
      <h1>Shopping Cart</h1>
      <div v-if="items.length === 0">
        <p>Your cart is empty.</p>
      </div>
      <div v-else>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.id">
              <td>{{ item.name }}</td>
              <td>{{ item.price }}</td>
              <td>{{ item.quantity }}</td>
              <td>{{ item.price * item.quantity }}</td>
              <td>
                <button @click="removeItem(item)">Remove</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="cart-total">
          <h2>Cart Total: {{ cartTotal }}</h2>
          <button @click="checkout()">Checkout</button>
        </div>
      </div>
    </div>
</template>
  
