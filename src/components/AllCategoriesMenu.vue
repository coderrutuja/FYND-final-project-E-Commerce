<script>
import NotebooksPage from './pages/NotebooksPage.vue';
import PlannersPage from './pages/PlannersPage.vue';
import PensAndPencils from './pages/PensAndPencils.vue';
import JournalsPage from './pages/JournalPage.vue';
import BagsPage from './pages/BagsPage.vue';
import AccessoriesPage from './pages/AccessoriesPage.vue';

  export default {
    name: 'AllCategoriesMenu',
    components: {
      NotebooksPage,
      PlannersPage,
      PensAndPencils,
      JournalsPage,
      BagsPage,
      AccessoriesPage
    },
    data() {
      return {
        categories: [
          { name: 'Notebooks', link: '/notebooks' },
          { name: 'Planners', link: '/planners' },
          { name: 'Pens and Pencils', link: '/pens-and-pencils' },
          { name: 'Journals', link: '/journals' },
          { name: 'Bags', link: '/bags' },
          { name: 'Accessories', link: '/accessories' },
        ],
      };
    },
  };
</script>

<template>
    <nav>
      <ul>
        <li v-for="(category, index) in categories" :key="index">
          <a :href="category.link">{{ category.name }}</a>
        </li>
      </ul>
    </nav>
</template>
  
<style scoped>
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  li {
    margin: 0 1rem;
  }
  
  a {
    color: #333;
    text-decoration: none;
    font-size: 1rem;
  }
</style>
  