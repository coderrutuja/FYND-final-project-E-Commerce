<!-- eslint-disable vue/multi-word-component-names -->
<script>
export default {
  name: 'Footer'
};
</script>

<template>
  <footer class="bg-dark text-light py-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6 mb-4">
          <h6 class="text-uppercase font-weight-bold mb-4">About Us</h6>
          <p class="text-muted">We are an online store that sells high-quality stationary products.</p>
        </div>
        <div class="col-lg-3 col-md-6 mb-4">
          <h6 class="text-uppercase font-weight-bold mb-4">Categories</h6>
          <ul class="list-unstyled mb-0">
            <li><router-link class="text-muted" to="/products/notebooks">Notebooks</router-link></li>
            <li><router-link class="text-muted" to="/products/pens">Pens</router-link></li>
            <li><router-link class="text-muted" to="/products/pencils">Pencils</router-link></li>
            <li><router-link class="text-muted" to="/products/planners">Planners</router-link></li>
            <li><router-link class="text-muted" to="/products/journals">Journals</router-link></li>
            <li><router-link class="text-muted" to="/products/bags">Bags</router-link></li>
            <li><router-link class="text-muted" to="/products/accessories">Accessories</router-link></li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 mb-4">
          <h6 class="text-uppercase font-weight-bold mb-4">Contact Us</h6>
          <ul class="list-unstyled mb-0">
            <li><i class="bi bi-geo-alt-fill me-2"></i>123 Main St, Anytown USA</li>
            <li><i class="bi bi-envelope-fill me-2"></i>support@stationaryshop.com</li>
            <li><i class="bi bi-phone-fill me-2"></i>+1 (555) 555-5555</li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 mb-4">
          <h6 class="text-uppercase font-weight-bold mb-4">Follow Us</h6>
          <ul class="list-unstyled mb-0">
            <li><a class="text-muted" href="#"><i class="bi bi-facebook me-2"></i>Facebook</a></li>
            <li><a class="text-muted" href="#"><i class="bi bi-twitter me-2"></i>Twitter</a></li>
            <li><a class="text-muted" href="#"><i class="bi bi-instagram me-2"></i>Instagram</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bg-dark py-2">
      <div class="container text-center">
        <p class="text-muted mb-0">&copy; 2023 Stationary Shop. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
a {
  text-decoration: none;
}
</style>
