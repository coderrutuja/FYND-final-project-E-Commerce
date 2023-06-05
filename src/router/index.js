import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home.vue'
import ProductsPage from './views/ProductsPage.vue'
import AccessoriesPage from './pages/AccessoriesPage.vue'
import BagsPage from './pages/BagsPage.vue'
import JournalsPage from './pages/JournalsPage.vue'
import NotebooksPage from './pages/NotebooksPage.vue'
import PensAndPencils from './pages/PensAndPencils.vue'
import PlannersPage from './pages/PlannersPage.vue'
import ProductDetailPage from './views/ProductDetailPage.vue'
import OrderHistory from './components/OrderHistory.vue'
import ShoppingCart from './components/ShoppingCart.vue'
import CheckoutProcess from './components/CheckoutProcess.vue'
import ThankYou from './components/ThankYou.vue'
import LoginSignup from './components/LoginSignup.vue'
import AboutUs from './components/AboutUs.vue'
import ContactUs from './components/ContactUs.vue'
import ShippingDetails from './components/ShippingDetails.vue'
import OrderCheckout from './components/OrderCheckout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'ProductsPage',
    component: ProductsPage,
    children: [
      {
        path: 'accessories',
        name: 'AccessoriesPage',
        component: AccessoriesPage
      },
      {
        path: 'bags',
        name: 'BagsPage',
        component: BagsPage
      },
      {
        path: 'journals',
        name: 'JournalsPage',
        component: JournalsPage
      },
      {
        path: 'notebooks',
        name: 'NotebooksPage',
        component: NotebooksPage
      },
      {
        path: 'pens-and-pencils',
        name: 'PensAndPencils',
        component: PensAndPencils
      },
      {
        path: 'planners',
        name: 'PlannersPage',
        component: PlannersPage
      }
    ]
  },
  {
    path: '/products/:id',
    name: 'ProductDetailPage',
    component: ProductDetailPage
  },
  {
    path: '/order-history',
    name: 'OrderHistory',
    component: OrderHistory
  },
  {
    path: '/shopping-cart',
    name: 'ShoppingCart',
    component: ShoppingCart
  },
  {
    path: '/checkout-process',
    name: 'CheckoutProcess',
    component: CheckoutProcess
  },
  {
    path: '/thank-you',
    name: 'ThankYou',
    component: ThankYou
  },
  { 
    path: '/login-signup', 
    component: LoginSignup 
  },
  { 
    path: '/shipping-details',
    component: ShippingDetails 
  },
  { 
    path: '/about', 
    component: AboutUs 
  },
  { 
    path: '/contact', 
    component: ContactUs 
  },
]

// Initialize the router
const router = new VueRouter({
  routes,
  mode: 'history'
});