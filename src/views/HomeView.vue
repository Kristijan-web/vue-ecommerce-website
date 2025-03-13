<template>
  <div class="flex flex-col items-center bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 min-h-screen">
    <div class="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md">

      <section class="text-center mb-10">
        <h1 class="text-4xl font-bold text-gray-800">Welcome to Electric Emporium</h1>
        <p class="mt-4 text-gray-600">Discover the latest in electronics and tech innovations, all in one place.</p>
        <img src="@/assets/images/home.jpg" alt="Hero Banner" class="w-full max-w-lg mx-auto my-6 rounded-lg shadow-md" />
        <router-link to="/shop">
          <custom-button :text="'Shop'"></custom-button>
        </router-link>
      </section>


      <section class="mb-10">
        <h2 class="text-3xl font-semibold text-gray-700 text-center">Top 3 Most Sold Products</h2>
        <p class="mt-2 text-gray-600 text-center">Check out our best-sellers!</p>
        <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <single-product :products="topSoldProducts"></single-product>
            
          
        </div>
      </section>

      <section class="mb-10">
    <h2 class="text-3xl font-semibold text-gray-700 text-center">What Our Customers Are Saying</h2>
    <p class="mt-2 text-gray-600 text-center">Real feedback from our satisfied customers.</p>
    <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <ReviewCard 
        userName="Jane Doe" 
        review="Amazing selection of products and top-notch customer service!" 
      />
      <ReviewCard 
        userName="John Smith" 
        review="I found exactly what I needed for my home office. Highly recommend Electric Emporium." 
      />
      <ReviewCard 
        userName="Emily Johnson" 
        review="Great prices, fast shipping, and excellent quality products!" 
      />
    </div>
  </section>

     
    </div>
  </div>
</template>

<script>
import singleProduct from './singleProduct.vue';
import ReviewCard from '@/components/ui/ReviewCard.vue';
import CustomButton from '@/components/ui/CustomButton.vue';

export default {
  components:{
    singleProduct,
    ReviewCard,
    CustomButton
  },
  computed: {
    topSoldProducts() {
      
      const products = [...this.$store.getters['products/getProducts']];
      return products.sort((a, b) => b.sold - a.sold).slice(0, 3);
    }
}

};
</script>

<style scoped>
.orange{
  background-color: #EF5B2A;
}
</style>
