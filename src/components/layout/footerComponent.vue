<template>
    <footer class="bg-white text-white py-4">
      <div class="container mx-auto px-2 flex flex-col md:flex-row justify-between items-center">
        <div class="flex-shrink-0 mb-4 md:mb-0">
          <router-link to="/">
            <img src="@/assets/images/logo.png" alt="logo" class="h-10"/>
          </router-link>
        </div>
        
        <nav class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 justify-center items-center">
          <router-link to="/" class="footer-link">Home</router-link>
          <router-link to="/about" class="footer-link">About</router-link>
          <router-link to="/shop" class="footer-link">Shop</router-link>
          <router-link to="/contact" class="footer-link">Contact</router-link>
          <router-link to="/" class="footer-link">Privacy Policy</router-link>
          <router-link to="/" class="footer-link">Terms of Service</router-link>
        </nav>
  
        <div class="flex space-x-4 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" class="footer-link">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" class="footer-link">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" class="footer-link">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
  
      <div class="text-center mt-4 text-gray-600">
        © {{ new Date().getFullYear() }} Electric Emporium. All rights reserved.
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComponent',
  };
  </script>
  
  <style scoped>
  .footer-link {
    color: black;
    padding: 0.5rem;
  }
  
  .footer-link:hover {
    color: gray;
  }
  
  .footer-link i {
    font-size: 1.25rem;
  }
  </style>
  