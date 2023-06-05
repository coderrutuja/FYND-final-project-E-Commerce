<template>
    <div>
      <button @click="pay">Pay {{ amount }}</button>
      <p v-if="error">{{ error }}</p>
    </div>
</template>
  
<script>
  import VueRazorpay from 'vue-razorpay';
  
  export default {
    components: {
      VueRazorpay
    },
    props: {
      amount: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        error: null
      };
    },
    methods: {
      pay() {
        this.$razorpay.createPayment({
          amount: this.amount,
          currency: 'INR',
          notes: {}
        }).then(response => {
          // Handle success
          this.$router.push('/thank-you');
        }).catch(err => {
          // Handle error
          this.error = err.description;
        });
      }
    }
  };
</script>
  