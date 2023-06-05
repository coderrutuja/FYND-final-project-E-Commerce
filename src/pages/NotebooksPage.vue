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
      // fetch the category and products data from your backend API
      // and assign them to the data properties in this lifecycle hook
      this.category = 'Notebooks';
      this.products = [
        {
          id: 1,
          name: 'Spiral Notebook',
          description: '80 sheets, college ruled',
          price: 'Rs.500',
          image: '/assets/img/Notebooks/A5-ringBound-notebook.avif'
        },
        {
          id: 2,
          name: 'Composition Notebook',
          description: '100 sheets, wide ruled',
          price: 'Rs. 600',
          image: '/assets/img/Notebooks/A5-ringBound-notebook2.webp'
        },
        {
          id: 3,
          name: 'A5 Ring Bound Notebook',
          description: '100 sheets, wide ruled',
          price: 'Rs. 600',
          image: '/assets/img/Notebooks/A5-ringBound-notebook3.webp'
        },
        {
          id: 4,
          name: 'Beautiful Thoughts Notebook',
          description: '100 sheets, wide ruled',
          price: 'Rs. 600',
          image: '/assets/img/Notebooks/Beautiful-thoughts.webp'
        },
        {
          id: 5,
          name: 'Clutter Ring Bound Notebook',
          description: '100 sheets, wide ruled',
          price: 'Rs. 600',
          image: '/assets/img/Notebooks/clutter.webp'
        },
        {
          id: 6,
          name: 'DreamRun Notebook',
          description: '100 sheets, wide ruled',
          price: 'Rs. 600',
          image: '/assets/img/Notebooks/dream-notebook.webp'
        },
        {
          id: 7,
          name: 'Ring Bound Notebooks - Set of 3',
          description: '100 sheets, wide ruled',
          price: 'Rs. 600',
          image: '/assets/img/Notebooks/A5-ringBound-notebook2.webp'
        },
        {
          id: 8,
          name: 'Travel Notebook',
          description: '100 sheets, wide ruled',
          price: 'Rs. 600',
          image: '/assets/img/Notebooks/travel-notebook.webp'
        },
        {
          id: 9,
          name: 'Travel Notebook - Baby Pink',
          description: '100 sheets, wide ruled',
          price: 'Rs. 600',
          image: '/assets/img/Notebooks/travel-notebook2.webp'
        },
        {
          id: 10,
          name: 'Woman Notebook - Journal',
          description: '100 sheets, wide ruled',
          price: 'Rs. 600',
          image: '/assets/img/Notebooks/unapologitically-me-journal.webp'
        }
        
      ]
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
  