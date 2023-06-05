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
    name: 'AccessoriesPage',
    data() {
      return {
        category: '',
        products: []
      }
    },
    mounted() {
      // You can fetch the category and products data from your backend API
      // and assign them to the data properties in this lifecycle hook
      this.category = 'Accessories';
      this.products = [
        {
          id: 1,
          name: 'Desk Organizer',
          description: '80 sheets, college ruled',
          price: 'Rs.2999',
          image: '/assets/img/Accessories/desk-organizer1.webp'
        },
        {
          id: 2,
          name: 'Notebook Pouch',
          description: '100 sheets, wide ruled',
          price: 'Rs.890',
          image: '/assets/img/Accessories/notebook-pouch.webp'
        },
        {
          id: 3,
          name: 'Sakura Pensil Case',
          description: '100 sheets, wide ruled',
          price: 'Rs.500',
          image: '/assets/img/Accessories/pensil-case1.webp'
        },
        {
          id: 4,
          name: 'Pencil Case Pouched',
          description: '100 sheets, wide ruled',
          price: 'Rs.750',
          image: '/assets/img/Accessories/pensilcase-pouched.webp'
        },
        {
          id: 5,
          name: 'Cute Rabbit Design Pencil Case',
          description: '100 sheets, wide ruled',
          price: 'Rs.499',
          image: '/assets/img/Accessories/pensilcase2.webp'
        },
        {
          id: 6,
          name: 'Cute Pencil Case',
          description: '100 sheets, wide ruled',
          price: 'Rs.890',
          image: '/assets/img/Accessories/pensilcase3.webp'
        },
        {
          id: 7,
          name: 'Brown Cover Pencil Case',
          description: '100 sheets, wide ruled',
          price: 'Rs.890',
          image: '/assets/img/Accessories/pensilcase4.webp'
        },
        {
          id: 8,
          name: 'Cute Pencil Cases - Set of 3',
          description: '100 sheets, wide ruled',
          price: 'Rs.890',
          image: '/assets/img/Accessories/pensilcases-setof3.webp'
        },
        {
          id: 9,
          name: 'Travel Pouch',
          description: '100 sheets, wide ruled',
          price: 'Rs.890',
          image: '/assets/img/Accessories/travel-pouch.webp'
        },
        {
          id: 10,
          name: 'Blue Travel Pouch',
          description: '100 sheets, wide ruled',
          price: 'Rs.890',
          image: '/assets/img/Accessories/travel-pouch4.webp'
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
  