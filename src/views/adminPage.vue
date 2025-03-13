<template>
  <div class="flex flex-col items-center bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 min-h-screen">
    <div class="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md">
 
      <section class="text-center mb-10">
        <h1 class="py-5 text-4xl font-bold text-gray-800">Admin Page</h1>
        <router-link to="/add-product">
          <custom-button :text="'Add Product'"></custom-button>
        </router-link>
      </section>

      <section class="mb-10">
        <h2 class="text-3xl font-semibold text-gray-700 text-center">Your Products</h2>
        <p class="mt-2 text-gray-600 text-center">Edit or delete your products below.</p>
        
        <div class="mt-8 overflow-x-auto">

          <div v-if="loading && products.length === 0" class="flex justify-center items-center h-64">
            <mySpinner/>
          </div>

          <div v-else-if="products.length === 0" class="text-center text-gray-500">
            <p>No products found</p>
          </div>

          <div v-else>
            <table class="min-w-full table-auto bg-white">
              <thead>
                <tr class="bg-gray-100 text-gray-700">
                  <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Image</th>
                  <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                  <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Price</th>
                  <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr v-for="product in products" :key="product.id">
                  <td class="px-6 py-4">
                    <img :src="product.image" alt="Product image" class="w-24 h-24 object-cover rounded-md" />
                  </td>
                  <td class="px-6 py-4">
                    <h2 class="text-lg font-semibold">{{ product.name }}</h2>
                  </td>
                  <td class="px-6 py-4">
                    <p class="font-bold text-lg">${{ product.price }}</p>
                  </td>
                  <td class="px-6 py-4 space-x-2 flex">
                    <template v-if="loading[product.id]">
                      
                      <div 
                        class="flex justify-center items-center mt-8 relative"
                        style="width: 100%; height: 100%;"
                      >
                        <mySpinner/>
                      </div>
                    </template>
                    <template v-else>
                      <custom-button 
                        :text="'Delete'"
                        :buttonClass="'bg-red-500 hover:bg-red-600 text-white'"
                        @click="deleteProduct(product.id)"
                      />
                      <custom-button 
                        :text="'Edit'"
                        :buttonClass="'bg-blue-500 hover:bg-blue-600 text-white'"
                        @click="$router.push(`/edit-product/${product.id}`)"
                      />
                    </template>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import CustomButton from '@/components/ui/CustomButton.vue';
import mySpinner from '@/components/ui/mySpinner.vue';
export default {
  components: {
    CustomButton,
    mySpinner
  },
  data() {
    return {
      loading: {} 
    };
  },
  computed: {
    products() {
      return this.$store.getters['products/getProducts'];
    }
  },
  methods: {
    async deleteProduct(productId) {
      if (!this.products || !this.loading) return;

      this.loading = { [productId]: true };

      try {
        await this.$store.dispatch('products/deleteProduct', productId);
      } catch (error) {
        console.error('Failed to delete product:', error);
      } finally {
        this.loading = { [productId]: false };
      }
    }
  }
};
</script>

<style scoped>

</style>
