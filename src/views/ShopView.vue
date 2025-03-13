<template>
  <div>
    <div class="flex items-center justify-center p-4">
      <CustomInput
        v-model="searchedInput"
        label="Search"
        id="search"
        type="text"
        placeholder="Search..."
      />
    </div>

    <div class="container mx-auto p-4">
      
      <div v-if="loading" class="flex justify-center items-center h-64">
        <mySpinner/>
      </div>

      
      <div v-else>
        <div v-if="filteredProducts.length === 0" class="text-center text-gray-500">
          <p>No products available</p>
        </div>
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <single-product :products="filteredProducts"></single-product>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import singleProduct from './singleProduct.vue';
import CustomInput from './customInput.vue';
import mySpinner from '@/components/ui/mySpinner.vue';
export default {
  components: {
    singleProduct,
    CustomInput,
    mySpinner
  },
  data() {
    return {
      searchedInput: '',
      loading: true,
    };
  },
  computed: {
    products() {
      return this.$store.getters['products/getProducts'];
    },
    filteredProducts() {
      const lowerCaseSearch = this.searchedInput.toLowerCase();
      return this.products.filter(product =>
        product.name.toLowerCase().includes(lowerCaseSearch)
      );
    }
  },
  watch: {
    products(newProducts) {    
      if (newProducts.length > 0) {
        this.loading = false;
      }
    }
  },
  async created() {
    await this.loadProducts();
  },
  methods: {
    async loadProducts() {
      try {
        await this.$store.dispatch('products/getProducts');

        if (this.products.length > 0) {
          this.loading = false; 
        }
      } catch (error) {
        console.error('Failed to fetch products:', error);

        this.loading = false; 
      }
    }
  }
}
</script>


<style>
h2 {
  color: #EF5B2A;
}
#price {
  color: #EF5B2A;
}
</style>
