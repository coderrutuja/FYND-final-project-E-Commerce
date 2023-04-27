import store from './store/store.js';

export default {
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    async login(credentials) {
      try {
        const user = await this.$store.dispatch('loginUser', credentials);
        // handle successful login
      } catch (error) {
        // handle login error
      }
    },
    async signup(credentials) {
      try {
        const user = await this.$store.dispatch('signupUser', credentials);
        // handle successful signup
      } catch (error) {
        // handle signup error
      }
    },
    async logout() {
      try {
        await this.$store.dispatch('logoutUser');
        // handle successful logout
      } catch (error) {
        // handle logout error
      }
    }
  }
};
