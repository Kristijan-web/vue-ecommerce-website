<template>
  <div class="flex flex-col items-center bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 min-h-screen">
    <div class="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
      <h2 class="text-3xl font-semibold text-gray-700 text-center mb-6">Add a New Product</h2>
  
      <form @submit.prevent="addProduct" class="space-y-6">
        <CustomInput
          v-model="newProduct.name"
          label="Product Name"
          id="product-name"
          placeholder="Enter product name"
        />
        <CustomInput
          v-model="newProduct.price"
          label="Product Price"
          id="product-price"
          type="number"
          placeholder="Enter product price"
        />
        <CustomInput
          v-model="newProduct.description"
          label="Product Description"
          id="product-description"
          placeholder="Enter product description"
        />
        <CustomInput
          v-model="newProduct.material"
          label="Product Material"
          id="product-material"
          placeholder="Enter product material"
        />
  
        <div class="flex justify-center items-center">
          <custom-button 
            v-if="loading"
            text="Adding Product"
          />
          <custom-button 
            v-else
            text="Add Product"
          />
        </div>

        <div v-if="loading" class="flex justify-center mt-4">
          <mySpinner/>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import CustomInput from '@/views/customInput.vue'; 
import CustomButton from '@/components/ui/CustomButton.vue';
import mySpinner from '@/components/ui/mySpinner.vue';
export default {
  components: {
    CustomInput,
    CustomButton,
    mySpinner
  },
  data() {
    return {
      newProduct: {
        name: '',
        price: '',
        description: '',
        material: '',
      },
      loading: false 
    };
  },
  methods: {
    async addProduct() {
      this.loading = true; 
      try {
        await this.$store.dispatch('products/addProduct', this.newProduct);
        this.$router.push('/admin'); 
      } catch (error) {
        console.error('Failed to add product:', error);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>

</style>
