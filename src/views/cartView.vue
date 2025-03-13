<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8">
      <h1 class="text-2xl font-semibold text-center mb-6">Shopping Cart</h1>

      <div v-if="cart.length" class="space-y-6">
        <div v-for="(item, index) in cart" :key="index" class="flex items-center justify-between border-b pb-6">
          <img :src="item.image" alt="Product image" class="w-32 h-32 object-cover rounded-lg">

          <div class="flex items-center space-x-4 ml-4">
            <button @click="decreaseQuantity(item)" class="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">-</button>
            <span class="text-lg">{{ item.quantity }}</span>
            <button @click="increaseQuantity(item)" class="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">+</button>
          </div>

          <div class="flex-1 flex items-center justify-between">
            <div class="flex-1">
              <h2 class="text-lg font-semibold">{{ item.name }}</h2>
              <p class="text-gray-600 mt-1">Price: ${{ parseFloat(item.price).toFixed(2) }}</p>
            </div>

            <CustomButton 
            :text="'Delete'" 
            buttonClass="bg-red-500 hover:bg-red-600 text-white"
            @click="removeFromCart(item)" 
            />
          </div>
        </div>
      </div>


      <div v-else class="text-center">
        <p class="text-lg text-gray-500">Your cart is empty.</p>
      </div>

      <div v-if="cart.length" class="flex justify-end mt-6 text-right">
        <div class="font-semibold text-lg">
          Total Price: ${{ totalPrice.toFixed(2) }}
        </div>
      </div>

      <div class="mt-6 text-center">
        <CustomButton 
          :text="'Buy Now'" 
          :buttonClass="cart.length ? 'bg-orange-500 hover:bg-orange-600 text-white' : 'bg-gray-300 cursor-not-allowed'"
          @click="buyProducts" 
          :disabled="!cart.length"
        />
      </div>

      <transition name="fade">
        <div v-if="showSuccessMessage" class="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
          Purchase successful! Thank you for your order.
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CustomButton from '@/components/ui/CustomButton.vue';

export default {
  components: {
    CustomButton
  },
  data() {
    return {
      showSuccessMessage: false, 
    };
  },
  computed: {
    ...mapGetters('cart', ['getCart']),
    cart() {
      return this.getCart;
    },
    totalPrice() {
      return this.cart.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0);
    }
  },
  methods: {
    ...mapActions('cart', ['updateCart', 'removeFromCart', 'clearCart']),

    increaseQuantity(item) {
      item.quantity++;
      this.updateCart(item);
    },

    decreaseQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
        this.updateCart(item);
      } else {
        this.removeFromCart(item);
      }
    },

    buyProducts() {
      if (this.cart.length > 0) {
        this.showSuccessMessage = true;
        this.clearCart();

        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 3000);
      }
    }
  }
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
