<template>
    <div class="login-signup">
      <h3>{{ formTitle }}</h3>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="form.password" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-primary">{{ submitButtonText }}</button>
      </form>
      <div v-if="errorMessage" class="alert alert-danger mt-3">{{ errorMessage }}</div>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          password: ''
        },
        formType: 'login'
      }
    },
    computed: {
      formTitle() {
        return this.formType === 'login' ? 'Log In' : 'Sign Up';
      },
      submitButtonText() {
        return this.formType === 'login' ? 'Log In' : 'Sign Up';
      }
    },
    methods: {
      submitForm() {
        const { email, password } = this.form;
        // TODO: implement form submission using an API call
      }
    }
  }
</script>
  
<style>
  .login-signup {
    margin-bottom: 2rem;
  }
</style>
  