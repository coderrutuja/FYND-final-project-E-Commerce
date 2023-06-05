<template>
  <div class="home-page">
    <navbar />
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <shopping-cart />
          <login-signup />
        </div>
        <div class="col-md-9">
          <div class="row row-cols-1 row-cols-md-4 g-4">
            <product-card v-for="product in products" :key="product.id" :product="product" />
          </div>
        </div>
      </div>
    </div>
    <footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';
import LoginSignup from '@/components/LoginSignup.vue';
import ProductCard from '@/views/ProductCard.vue';
import Footer from '@/components/Footer.vue';
import { getProducts } from '@/api/products';

export default {
  components: {
    Navbar,
    ShoppingCart,
    LoginSignup,
    ProductCard,
    Footer
  },
  data() {
    return {
      products: []
    }
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await getProducts();
        this.products = response.data;
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>

<style>
.home-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.row-cols-1 > * {
  margin-bottom: 2rem;
}

@media (min-width: 768px) {
  .row-cols-md-4 > * {
    margin-bottom: 0;
  }
}
</style>
