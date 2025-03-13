<template>
    <div class="flex flex-col items-center bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div class="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
        <h2 class="text-3xl font-semibold text-gray-700 text-center mb-6">Edit Product</h2>
    
        <form @submit.prevent="updateProduct" class="space-y-6">
          <CustomInput
            v-model="editedProduct.name"
            label="Product Name"
            id="product-name"
            placeholder="Enter product name"
          />
          <CustomInput
            v-model="editedProduct.price"
            label="Product Price"
            id="product-price"
            type="number"
            placeholder="Enter product price"
          />
          <CustomInput
            v-model="editedProduct.description"
            label="Product Description"
            id="product-description"
            placeholder="Enter product description"
          />
          <CustomInput
            v-model="editedProduct.material"
            label="Product Material"
            id="product-material"
            placeholder="Enter product material"
          />
  
          <div class="flex justify-center items-center">
            <custom-button 
              v-if="loading"
              text="Editing Product"
            />
            <custom-button 
              v-else
              text="Edit Product"
            />
          </div>
  
          <div v-if="loading" class="flex justify-center mt-4">
            <div 
              class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
              style="border-top-color: transparent; border-right-color: #EF5B2A;"
            ></div>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import CustomInput from '@/views/customInput.vue'; 
  import CustomButton from '@/components/ui/CustomButton.vue';
  
  export default {
    components: {
      CustomInput,
      CustomButton
    },
    data() {
      return {
        product: null,
        editedProduct: {
          name: '',
          price: '',
          description: '',
          material: '',
        },
        loading: false 
      }
    },
    created() {
      const productId = this.$route.params.id;
      this.fetchProduct(productId);
    },
    methods: {
      async updateProduct() {
        this.loading = true;
        try {
          await this.$store.dispatch('products/updateProduct', this.editedProduct);
          this.$router.push('/admin'); 
        } catch (error) {
          console.error('Failed to update product:', error);
        } finally {
          this.loading = false; 
        }
      },
      fetchProduct(id) {
        const allProducts = this.$store.getters['products/getProducts'];
        this.product = allProducts.find(product => product.id == id);
        if (this.product) {
          this.editedProduct = { ...this.product };
        }
      },
    }
  }
  </script>
  
  <style scoped>
 
  </style>
  