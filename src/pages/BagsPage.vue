<template>
    <div class="category-page">
      <header>
        <h1>{{ category }}</h1>
      </header>
      <div class="category-products">
        <div v-for="product in products" :key="product.id">
          <img :src="product.image" alt="product image">
          <h2>{{ product.name }}</h2>
          <p>{{ product.description }}</p>
          <span>{{ product.price }}</span>
        </div>
      </div>
    </div>
</template>
  
<script>
  export default {
    name: 'CategoryPage',
    data() {
      return {
        category: '',
        products: []
      }
    },
    mounted() {
      // You can fetch the category and products data from your backend API
      // and assign them to the data properties in this lifecycle hook
      this.category = 'Notebooks';
      this.products = [
        {
          id: 1,
          name: 'Kawaii Face BackPack',
          description: '80 sheets, college ruled',
          price: 'Rs.5000',
          image: '/assets/img/Bags/backpack-kawaii-face.webp'
        },
        {
          id: 2,
          name: 'Pouch Bag',
          description: '100 sheets, wide ruled',
          price: 'Rs.900',
          image: '/assets/img/Bags/pouch-bag.webp'
        },
        {
          id: 3,
          name: 'Coffee Latte Tote Bag',
          description: '100 sheets, wide ruled',
          price: 'Rs.900',
          image: '/assets/img/Bags/totebag1.webp'
        },
        {
          id: 4,
          name: 'Cute Woolen Tote Bag',
          description: '100 sheets, wide ruled',
          price: 'Rs.900',
          image: '/assets/img/Bags/totebag2.webp'
        },
        {
          id: 5,
          name: 'Cute Tote Bag',
          description: '100 sheets, wide ruled',
          price: 'Rs.900',
          image: '/assets/img/Bags/totebag3.webp'
        },
        {
          id: 6,
          name: 'Icecream Tote Bag',
          description: '100 sheets, wide ruled',
          price: 'Rs.900',
          image: '/assets/img/Bags/totebag4.webp'
        }
        
      ]

      const categoryId = this.$route.params.categoryId;
    fetch(`/api/categories/${categoryId}`)
      .then((response) => response.json())
      .then((category) => {
        this.category = category;
        return fetch(`/api/products/${categoryId}`);
      })
      .then((response) => response.json())
      .then((products) => {
        this.products = products;
      })
      .catch((error) => {
        console.error('Error fetching category and products:', error);
      });

    }
  }
</script>
  
  <style scoped>
  .category-page {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .category-products {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    margin-top: 20px;
  }
  
  .category-products img {
    max-width: 100%;
  }
</style>
  