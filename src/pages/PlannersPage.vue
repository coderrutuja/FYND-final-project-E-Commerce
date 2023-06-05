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
      this.category = 'Notebooks';
      this.products = [
        {
          id: 1,
          name: 'Axiety Journal Workbook Tracker',
          description: '80 sheets, college ruled',
          price: 'Rs.5000',
          image: '/assets/img/Planners/anxiety-journal-workbook-tracker.webp'
        },
        {
          id: 2,
          name: 'Monthly Planner - Printable',
          description: '100 sheets, wide ruled',
          price: 'Rs.2350',
          image: '/assets/img/Planners/monthly-planner-printable.webp'
        },
        {
          id: 3,
          name: 'Self Discovery Planner',
          description: '100 sheets, wide ruled',
          price: 'Rs.6000',
          image: '/assets/img/Planners/planner3.webp'
        },
        {
          id: 4,
          name: 'Reusable Weekly Wall Planner',
          description: '100 sheets, wide ruled',
          price: 'Rs.1999',
          image: '/assets/img/Planners/reusable-weekly-wall-planner.webp'
        },
        {
          id: 5,
          name: 'Therapy Notes',
          description: '100 sheets, wide ruled',
          price: 'Rs.6000',
          image: '/assets/img/Planners/therapy-notes.avif'
        },
        {
          id: 6,
          name: 'Selfcare Planner',
          description: '100 sheets, wide ruled',
          price: 'Rs.8000',
          image: '/assets/img/Planners/selfcare-planner.avif'
        },
        {
          id: 7,
          name: 'Sticky Notes',
          description: '100 sheets, wide ruled',
          price: 'Rs.940',
          image: '/assets/img/Planners/sticky-notes1.webp'
        },
        {
          id: 8,
          name: 'Wellness Journal Planner',
          description: '100 sheets, wide ruled',
          price: 'Rs.7000',
          image: '/assets/img/Planners/wellness-journal-planner.webp'
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
  