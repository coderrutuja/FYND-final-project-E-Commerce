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
      this.category = 'PensAndPencils';
      this.products = [
        {
          id: 1,
          name: 'Micron Pens - Set of 6',
          description: '80 sheets, college ruled',
          price: 'Rs.800',
          image: 'https://example.com/images/6setof-micron-pens.webp'
        },
        {
          id: 2,
          name: 'Automatic Pencils - Set of 3',
          description: '100 sheets, wide ruled',
          price: 'Rs.3000',
          image: 'https://example.com/images/automatic-pensils-setof3.jpg'
        },
        {
          id: 3,
          name: 'Brush Pens - Set of 12',
          description: '80 sheets, college ruled',
          price: 'Rs.2000',
          image: 'https://example.com/images/brush-pens.webp'
        },
        {
          id: 4,
          name: 'Color Gel Pens - Set of 12',
          description: '80 sheets, college ruled',
          price: 'Rs.2000',
          image: 'https://example.com/images/color-gelpens.webp'
        },
        {
          id: 5,
          name: 'Double Sided Highlighter Pens - Set of 12',
          description: '80 sheets, college ruled',
          price: 'Rs.2000',
          image: 'https://example.com/images/double-sided-highlighter.webp'
        },
        {
          id: 6,
          name: 'Double Lined Pens',
          description: '80 sheets, college ruled',
          price: 'Rs.2000',
          image: 'https://example.com/images/doublelines-pens-setof6.webp'
        },
        {
          id: 7,
          name: 'Japanese Calligraphy Pens',
          description: '80 sheets, college ruled',
          price: 'Rs.2000',
          image: 'https://example.com/images/japanese-calligraphy-pens.webp'
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
  