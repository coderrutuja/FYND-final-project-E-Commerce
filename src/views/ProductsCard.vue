<template>
    <div class="product-card">
      <div class="product-image">
        <img :src="product.image" alt="Product Image">
      </div>
      <div class="product-info">
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-price">{{ product.price }}</p>
        <button class="add-to-cart-btn" @click="addToCart">Add to Cart</button>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>
  
<style>
  .product-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    padding: 1rem;
    width: 250px;
    height: 350px;
    margin: 1rem;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  .product-image {
    width: 100%;
    height: 200px;
    margin-bottom: 1rem;
  }
  
  .product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .product-info {
    text-align: center;
  }
  
  .product-name {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  
  .product-price {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  .add-to-cart-btn {
    background-color: #4caf50;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
  }
</style>
  