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
          name: 'A5 Vegan Leather Journal',
          description: '80 sheets, college ruled',
          price: '$5.99',
          image: '/assets/img/Journals/a5 vegan leather journal.webp'
        },
        {
          id: 2,
          name: 'Beauty Flowers Journal',
          description: '100 sheets, wide ruled',
          price: 'Rs.800',
          image: '/assets/img/Journals/beauty-flowers-journal.webp'
        },
        {
          id: 3,
          name: 'Bullet Journal - Set of 4',
          description: '100 sheets, wide ruled',
          price: 'Rs.800',
          image: '/assets/img/Journals/bullet-journal-comboOf4.webp'
        },
        {
          id: 4,
          name: 'Cute Bullet Journal',
          description: '100 sheets, wide ruled',
          price: 'Rs.800',
          image: '/assets/img/Journals/bullet-journal1.webp'
        },
        {
          id: 5,
          name: 'Sakura Breeze Journal',
          description: 'color: Baby Pink, 100 sheets, wide ruled',
          price: 'Rs.800',
          image: '/assets/img/Journals/bullet-journal2.webp'
        },
        {
          id: 6,
          name: 'Bullet Journal - Light Green',
          description: 'Light green, 100 sheets, wide ruled',
          price: 'Rs.800',
          image: '/assets/img/Journals/bullet-journal3.webp'
        },
        {
          id: 7,
          name: 'Bullet Journal - Light Green',
          description: '100 sheets, wide ruled',
          price: 'Rs.800',
          image: '/assets/img/Journals/bullet-journal4.webp'
        },
        {
          id: 8,
          name: 'Cute Bullet Journal - Set of 2',
          description: '100 sheets, wide ruled',
          price: 'Rs.800',
          image: '/assets/img/Journals/bulletjournal-comboOf2.webp'
        },
        {
          id: 9,
          name: 'Cute Journal Collection',
          description: '100 sheets, wide ruled',
          price: 'Rs.800',
          image: '/assets/img/Journals/journal-collection.webp'
        },
        {
          id: 10,
          name: 'Cool Journal',
          description: '100 sheets, wide ruled',
          price: 'Rs.800',
          image: '/assets/img/Journals/journal1.webp'
        },
        {
          id: 11,
          name: 'Manifest Journal',
          description: '100 sheets, wide ruled',
          price: 'Rs.800',
          image: '/assets/img/Journals/manifest-journal.webp'
        },
        {
          id: 12,
          name: 'Therapy Journal',
          description: '100 sheets, wide ruled',
          price: 'Rs.800',
          image: '/assets/img/Journals/therapy-journal.webp'
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
  