<template>
    <div class="products-page">
      <div class="products-container">
        <product-card v-for="product in products" :key="product.id" :product="product" />
      </div>
    </div>
</template>
  
<script>
  import ProductCard from '@/viwes/ProductCard.vue';
  import { getProducts } from '@/api/products';
  
  export default {
    components: {
      ProductCard
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
  .products-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }
  
  .products-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
  