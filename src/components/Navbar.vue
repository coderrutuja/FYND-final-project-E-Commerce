<!-- eslint-disable vue/multi-word-component-names -->

<script>
import SearchBar from "./components/SearchBar.vue";
import NavbarLink from './components/NavbarLink.vue';
import AllCategoriesMenu from './components/AllCategoriesMenu.vue';

export default {
    name: 'Navbar',
    components: {
        SearchBar,
        NavbarLink,
        AllCategoriesMenu
    },

    props: ['pages', 'activePage', 'navLinkClick'],

    data() {
        return {
            theme: 'light',
            showMenu: false
        }
    },
    methods: {
        changeTheme() {
            let theme = 'light';

            if (this.theme == 'light') {
                theme = 'dark';
            }

            this.theme = theme;
        },
        toggleMenu() {
            this.showMenu = !this.showMenu;
        }
    }
}
</script>

<template>
    <nav
       :class="[`navbar-${theme}`, `bg-${theme}|`, `navabr`, `navbar-expand-lg`]"
    >
       <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src="./assets/logo.png" alt="Logo"></a>
        <router-link to="/" class="navbar-item">
            My Website
          </router-link>
          <div class="navbar-burger burger" @click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="navbar-menu" :class="{ 'is-active': showMenu }">
          <div class="navbar-start">
            <router-link to="/" class="navbar-item">Home</router-link>
            <all-categories-menu></all-categories-menu>
          </div>
          <div class="navbar-end">
            <router-link to="/cart" class="navbar-item">
              <span class="icon">
                <i class="fas fa-shopping-cart"></i>
              </span>
              <span>Cart</span>
            </router-link>
          </div>
        <search-bar></search-bar>
            <ul class="navbar-nav ne-auto nb-2 mb-lg-0">
                <li v-for="(link, index) in links" class="nav-item" :key="index">
                    <navbar-link
                       :page="page"
                       :isActive="activePage === index"
                    ></navbar-link>
                </li>
            </ul>
            <form class="d-flex">
                <button
                   class="btn btn-primary"
                   @click.prevent="changeTheme()"
                >Toggle</button>
            </form>
       </div>
       <div class="cart">
           <a href="/cart">Cart</a>
       </div>
    </nav>
</template>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  padding: 0 2rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-brand {
  font-size: 1.5rem;
}

.cart {
  font-size: 1.2rem;
}
</style>