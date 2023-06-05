<script>
import Home from './components/Home.vue'
import PageViews from './components/PageViews.vue'
import Navbar from './components/Navbar.vue'
import ProductsPage from './views/ProductPage.vue'
import Footer from './components/Footer.vue'
import AboutUs from './components/AboutUs.vue'
import ContactUs from './components/ContactUs.vue'

import ProductDetailPage from './views/ProductDetailPage.vue'
import LoginSignup from './components/LoginSignup.vue'
import OrderHistory from './components/OrderHistory.vue'
import OrderCheckout from './components/OrderCheckout.vue'
import ShoppingCart from './components/ShoppingCart.vue'
import ThankYou from './components/ThankYou.vue'
import AllCategoriesMenu from './components/AllCategoriesMenu.vue'
import AccessoriesPage from './pages/AccessoriesPage.vue'
import BagsPage from './pages/BagsPage.vue'
import JournalsPage from './pages/JournalsPage.vue'
import NotebooksPage from './pages/NotebooksPage.vue'
import PensAndPencils from './pages/PensAndPencils.vue'
import PlannersPage from './pages/PlannersPage.vue'

export default {
  components: {
    Home,
    PageViews,
    Navbar,
    Footer,
    ProductsPage,
    ProductDetailPage,
    LoginSignup,
    OrderHistory,
    OrderCheckout,
    ShoppingCart,
    ThankYou,
    AllCategoriesMenu,
    AccessoriesPage,
    BagsPage,
    JournalsPage,
    NotebooksPage,
    PensAndPencils,
    PlannersPage,
    AboutUs,
    ContactUs
  },

  data() {
    return {
      activePage: 0,
      pages: [
        {text:'Home', url:'/'},
        {text:'All Categories', url:'/categories'},
        {text:'About Us', url:'about'},
        {text:'Contact Us', url:'contact'},
      ]
    }
  }
}
</script>


<template>
  <div id="app">
    <div id="nav">
      <navbar
        :pages="pages"
        :active-page="activePage"
        :nav-link-click="(index) => activePage = index"
      ></navbar>
      <page-viewer
        :page="pages[activePage]"
      ></page-viewer>

      <router-link to="/">Home</router-link>
      <router-link to="/categories">All Categories</router-link>
      <router-link to="/product-page">Products</router-link>
      <router-link to="/about">About Us</router-link>
      <router-link to="/contact">Contact Us</router-link>
      <router-link to="/shopping-cart">Shopping Cart</router-link>
      <router-link to="/accessories">Accessories</router-link>
      <router-link to="/bags">Bags</router-link>
      <router-link to="/journals">Journals</router-link>
      <router-link to="/notebooks">Notebooks</router-link>
      <router-link to="/pens-pencils">Pens and Pencils</router-link>
      <router-link to="/planners">Planners</router-link>
      <router-link to="/checkout">Checkout</router-link>
      <router-link to="/order-history">Order History</router-link>
      <router-link to="/thank-you">ThankYou</router-link>
      <router-link to="/footer">Footer</router-link>

    </div>
    <router-view/>
    <home />
    <categories />
    <about />
    <contact />
    <shopping-cart />
    <accessories />
    <bags />
    <journals />
    <notebooks />
    <pens-pencils />
    <planners />
    <products-page />
    <product-detail-page />
    <login-signup />
    <order-history />
    <order-checkout />
    <thank-you />
    
    <footer />
  </div>

</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>