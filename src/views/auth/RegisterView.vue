<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
      <p class="text-2xl font-bold mb-4 text-center">Register</p>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <CustomInput
            v-model="form.name"
            label="Name"
            id="name"
            type="text"
            placeholder="John Doe"
            :class="{'border-red-500': errors.name}"
          />
          <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
        </div>
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
            class="text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register
          </button>
        </div>
      </form>
    </div>
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
        name: '',
        email: '',
        password: ''
      },
      errors: {}
    };
  },
  methods: {
    handleSubmit() {
      this.errors = {};

      const nameRegex = /^[A-Za-z\s]+$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

      if (!this.form.name || !nameRegex.test(this.form.name)) {
        this.errors.name = 'Please enter a valid name.';
      }

      if (!this.form.email || !emailRegex.test(this.form.email)) {
        this.errors.email = 'Please enter a valid email address.';
      }

      if (!this.form.password || !passwordRegex.test(this.form.password)) {
        this.errors.password = 'Password must be at least 8 characters long and include at least one letter and one number.';
      }

      if (Object.keys(this.errors).length === 0) {
        console.log('Form submitted:', this.form);
        try {
          this.$store.dispatch("auth/registerUser", this.form);

          const user = this.$store.getters["auth/getUser"];

          if (user) {
            this.$router.push({ path: '/login' });
          } else {
            console.error('User registration failed.');
          }
        } catch (error) {
          console.error('Error during registration:', error);
        }
      }
    }
  }
}
</script>

<style scoped>
#btn {
  background-color: #EF5B2A;
}
</style>
