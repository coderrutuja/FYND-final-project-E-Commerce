import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    user: null,
    cart: []
  },
  mutations: {
    SET_LOGGED_IN(state, loggedIn) {
      state.isLoggedIn = loggedIn;
    },
    SET_USER(state, user) {
      state.user = user;
    },
    SET_CART(state, cart) {
      state.cart = cart;
    },
    ADD_TO_CART(state, product) {
      let item = state.cart.find(item => item._id === product._id);
      if (item) {
        item.quantity++;
      } else {
        state.cart.push({...product, quantity: 1});
      }
    },
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter(item => item._id !== productId);
    }
  },
  actions: {
    async login({ commit }, user) {
      const response = await axios.post('/api/login', user);
      if (response.data.success) {
        commit('SET_LOGGED_IN', true);
        commit('SET_USER', response.data.user);
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }
      return response.data;
    },
    async logout({ commit }) {
      const response = await axios.post('/api/logout');
      if (response.data.success) {
        commit('SET_LOGGED_IN', false);
        commit('SET_USER', null);
        localStorage.removeItem('user');
      }
      return response.data;
    },
    async getCart({ commit, state }) {
      if (state.user) {
        const response = await axios.get(`/api/users/${state.user._id}/cart`);
        if (response.data.success) {
          commit('SET_CART', response.data.cart);
        }
        return response.data;
      }
    },
    async addToCart({ commit, state }, product) {
      if (state.user) {
        const response = await axios.post(`/api/users/${state.user._id}/cart`, { productId: product._id });
        if (response.data.success) {
          commit('ADD_TO_CART', product);
        }
        return response.data;
      }
    },
    async removeFromCart({ commit, state }, productId) {
      if (state.user) {
        const response = await axios.delete(`/api/users/${state.user._id}/cart/${productId}`);
        if (response.data.success) {
          commit('REMOVE_FROM_CART', productId);
        }
        return response.data;
      }
    }
  }
});
