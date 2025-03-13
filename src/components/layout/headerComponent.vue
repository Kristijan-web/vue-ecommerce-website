<template>
  <header class="bg-white text-white">
    <div class="container mx-auto px-2 flex items-center justify-between flex-wrap">
      <div class="flex-shrink-0">
        <router-link to="/">
        <img src="@/assets/images/logo.png" alt="logo" class="h-10"/>
      </router-link>
      </div>
      <nav class="flex-grow mt-1 md:mt-0">
        <ul class="flex flex-wrap space-x-4 md:space-x-3 justify-center md:justify-end items-center">
          <li v-if="isAdmin"><router-link to="/admin" class="nav-link">Admin</router-link></li>
          <li><router-link to="/" class="nav-link">Home</router-link></li>
          <li><router-link to="/about" class="nav-link">About</router-link></li>
          <li><router-link to="/shop" class="nav-link">Shop</router-link></li>
          <li><router-link to="/contact" class="nav-link">Contact</router-link></li>
          <li v-if="!isLoggedIn"><router-link to="/login" class="nav-link">Login</router-link></li>
          <li v-else>
            <button @click="logout" class="nav-link bg-transparent rounded-lg  focus:outline-none" id="logout">
              <span class="px-1">Logout</span>
              <i class="fa-solid fa-right-from-bracket px-1"></i>
            </button>
          </li>
          <li><router-link to="/cart" class="nav-link"><i class="fa-solid fa-cart-shopping"></i></router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'HeaderComponent', 
  computed: {
    ...mapGetters('auth', ['isLoggedIn','isAdmin'])
  },
  methods: {
    ...mapMutations('auth',['clearLoggedUser']),

    logout() {
      this.clearLoggedUser();
      this.$router.push('/')
    }
  }
}
</script>


  <style scoped>
  .nav-link {
    color: black;
    padding: 0.5rem;
  }
  
  .nav-link:hover {
    color: gray; 
  }
  
  .router-link-active, .router-link-exact-active {
    color: #EF5B2A; 
  }
  #logout{
    background-color: #EF5B2A;
  }
  </style>
  