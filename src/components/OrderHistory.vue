<script>
  export default {
    data() {
      return {
        orders: []
      };
    },
    async created() {
      const response = await fetch('/api/orderHistory.js');
      const orders = await response.json();
      this.orders = orders;
    },
    methods: {
      formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString();
      },
      formatCurrency(amount) {
        return '$' + amount.toFixed(2);
      }
    }
  };
</script>
  
<template>
    <div>
      <h1>Order History</h1>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Items</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order._id">
            <td>{{ order._id }}</td>
            <td>{{ formatDate(order.date) }}</td>
            <td>
              <ul>
                <li v-for="item in order.items" :key="item.product._id">
                  {{ item.quantity }} x {{ item.product.name }}
                </li>
              </ul>
            </td>
            <td>{{ formatCurrency(order.total) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
  
  