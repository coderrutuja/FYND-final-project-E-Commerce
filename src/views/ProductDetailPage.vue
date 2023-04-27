<script>
  import axios from 'axios';
  
  export default {
    props: {
      productId: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        product: {}
      };
    },
    methods: {
      fetchProduct() {
        axios.get(`/products/${this.productId}`)
          .then((response) => {
            this.product = response.data;
          })
          .catch((error) => {
            console.error(error);
          });
      },
      addToCart() {
        axios.post('/cart', {
          productId: this.productId,
          quantity: 1
        })
          .then((response) => {
            // Update cart state in the frontend
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }
</script>

<template>
    <div class="product-detail">
      <div class="product-image">
        <img :src="product.image" :alt="product.name" />
      </div>
      <div class="product-details">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p>Price: {{ product.price }}</p>
        <button @click="addToCart">Add to Cart</button>
      </div>
    </div>
</template>
  
<style scoped>
  .product-detail {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 1rem;
  }
  
  .product-image {
    width: 50%;
    margin-right: 2rem;
  }
  
  .product-image img {
    width: 100%;
  }
  
  .product-details {
    width: 50%;
  }
  
  .product-details h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .product-details p {
    margin-bottom: 1rem;
  }
  
  .product-details button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
  }
</style>
  