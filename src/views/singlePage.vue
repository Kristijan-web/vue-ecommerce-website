<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div v-if="product" class="max-w-5xl mx-auto p-10 bg-white rounded-lg shadow-lg flex items-center space-x-10">
      
      <div class="flex-shrink-0 w-1/2">
        <img :src="product.image" alt="Product image" class="w-full h-80 object-cover rounded-md">
      </div>

      
      <div class="w-1/2">
        <h2 class="text-3xl font-semibold mb-4">{{ product.name }}</h2>
        <p class="text-gray-700 mb-6 text-lg">{{ product.description }}</p>
        <p class="font-bold text-2xl mb-4">${{ product.price }}</p>
        <p class="text-gray-500 mb-6 text-lg">Material: {{ product.material }}</p>
        
        
        <div class="mb-6 flex items-center space-x-4">
          <label for="quantity" class="text-lg font-semibold">Quantity:</label>
          <input
            @input="validateQuantity"
            id="quantity"
            type="number"
            min="1"
            v-model.number="quantity"
            class="w-16 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
          />
          <CustomButton :text="'Add to Cart'" @click="attemptAddToCart(product)" />
        </div>
        
      </div>
    </div>
    
    <transition name="fade">
      <div v-if="showMessage" class="fixed top-20 right-5 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
        Product added to cart!
      </div>
    </transition>
    
    <transition name="fade">
      <div v-if="showErrorMessage" class="fixed top-20 right-5 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg">
        You must be logged in to add items to the cart!
      </div>
    </transition>
  </div>
</template>

<script>
import CustomButton from '@/components/ui/CustomButton.vue';
export default {
  components:{
    CustomButton
  },
  data() {
    return {
      cart: [],
      product: null,
      quantity: 1,
      showMessage: false,
      showErrorMessage: false
    };
  },
  created() {
    const productId = this.$route.params.id;
    this.fetchProduct(productId);
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters['auth/isLoggedIn'];
    }
  },
  methods: {
    fetchProduct(id) {
      const allProducts = this.$store.getters['products/getProducts'];
      this.product = allProducts.find(product => product.id == id);
    },
    attemptAddToCart(product) {

      if (this.isLoggedIn) {
        this.addToCart(product);
      } else {
        this.showErrorMessage = true;
        setTimeout(() => {
          this.showErrorMessage = false;
        }, 3000);
      }
    },

    addToCart(product) {
      this.$store.dispatch("cart/addToCart", {
        product: product,
        quantity: this.quantity
      });
      this.showMessage = true;
      setTimeout(() => {
        this.showMessage = false;
      }, 3000);
    },
    validateQuantity() {
    if (this.quantity < 1) {
        this.quantity = 1;
    } else if (this.quantity > 10) {
        this.quantity = 10;
    }
}

  }
}
</script>

  

<style>

</style>