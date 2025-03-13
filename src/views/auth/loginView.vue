<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
      <p class="text-2xl font-bold mb-4 text-center">Login</p>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <CustomInput
            v-model="form.email"
            label="Email"
            id="email"
            type="email"
            placeholder="example@example.com"
            :class="{'border-red-500': errors.email}"
          />
          <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
        </div>
        <div class="mb-4">
          <CustomInput
            v-model="form.password"
            label="Password"
            id="password"
            type="password"
            placeholder="********"
            :class="{'border-red-500': errors.password}"
          />
          <p v-if="errors.password" class="text-red-500 text-sm mt-1">{{ errors.password }}</p>
        </div>
        <div class="flex items-center justify-center mb-4">
          <button
            id="btn"
            type="submit"
            class="text-white px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </div>
        <p v-if="loginError" class="text-red-500 text-sm mt-1">{{ loginError }}</p>
      </form>
      <p>Don't have an account? <router-link to="/register" id="login">Create one!</router-link></p>
    </div>
    <transition name="fade">
      <div v-if="showMessage" class="fixed top-20 right-5 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg">
        {{ message }}
      </div>
    </transition>
  </div>
</template>

<script>
import CustomInput from '../customInput.vue';

export default {
  components: {
    CustomInput
  },
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      errors: {},
      loginError: '',
      showMessage: false,
      message: ''
    };
  },
  created() {
    if (this.$route.query.message) {
      this.message = this.$route.query.message;
      this.showMessage = true;
      setTimeout(() => {
        this.showMessage = false;
      }, 5000); 
    }
  },
  methods: {
    async handleSubmit() {
      this.errors = {};
      this.loginError = '';

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

      if (!this.form.email || !emailRegex.test(this.form.email)) {
        this.errors.email = 'Please enter a valid email address.';
      }

      if (!this.form.password || !passwordRegex.test(this.form.password)) {
        this.errors.password = 'Password must be at least 8 characters long and include at least one letter and one number.';
      }

      if (Object.keys(this.errors).length === 0) {
        try {
          const response = await this.$store.dispatch('auth/loginUser', this.form);
          if (response.success) {
            this.$router.push({ path: this.$route.query.redirect || '/' });
          } else {
            this.loginError = response.message;
          }
        } catch (error) {
          console.error('Error during login:', error);
          this.loginError = 'An error occurred during login.';
        }
      }
    }
  }
};
</script>

<style scoped>
#btn {
  background-color: #EF5B2A; 
}
#login {
  color: #EF5B2A;
}
</style>