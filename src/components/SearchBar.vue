<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        searchQuery: "",
        searchResults: [],
        showSearchResults: false,
      };
    },
    methods: {
        search() {
           axios.get(`/api/search?q=${this.searchQuery}`)
           .then(response => {
               this.searchResults = response.data.results;
            })
            .catch(error => {
               console.log(error);
            });
        },
        updateSearchResults() {
           // Code to update search results based on searchQuery
           // used a library like Axios to make API requests to a backend to get the search results
           if (!this.searchQuery) {
               this.searchResults = []; // clear the results if search query is empty
               return;
            }

            axios.get(`/api/search?q=${this.searchQuery}`)
            .then(response => {
               this.searchResults = response.data.results;
               this.showSearchResults = true;
            })
            .catch(error => {
               console.log(error);
            });
        },
    },
  };
</script>
  
<template>
    <div class="search-bar">
      <input type="text" v-model="searchQuery" @input="updateSearchResults">
      <ul v-if="showSearchResults" class="search-results">
        <li v-for="result in searchResults" :key="result.id">
          <a :href="result.url" :class="{ empasize: result.title.includes(searchQuery) }">{{ result.title }}</a>
        </li>
      </ul>
    </div>
</template>
  
<style>
  .search-bar {
    position: relative;
    display: flex;
    align-items: center;
  }

  .search-bar input[type="text"] {
    width: 100%;
    height: 40px;
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 20px;
    font-size: 16px;
    outline: none;
  }

  .search-results {
    position: absolute;
    top: 45px;
    left: 0;
    right: 0;
    background-color: #fff;
    border: 2px solid #ccc;
    border-top: none;
    border-radius: 0 0 10px 10px;
    padding: 10px;
    z-index: 1;
  }

  .search-results li {
    list-style: none;
    margin: 5px 0;
    padding: 5px 0;
    border-top: 1px solid #ccc;
  }

  .search-results li a {
    color: #333;
    text-decoration: none;
  }

  .search-results li a:hover {
    text-decoration: underline;
  }
</style>