<template>
  <div  
  v-for="product in products" 
  :key="product.id" 
  class="bg-white p-6 rounded-lg shadow-lg" 
  @click="showSingleProduct(product.id)"
  >
        <img :src="product.image" alt="Product image" class="w-full h-60 object-cover rounded-md mb-4">
        <h2 class="text-xl font-semibold mb-2">{{ product.name }}</h2>
        <p class="text-gray-700 mb-2">{{ product.description }}</p>
        <p id="price" class="font-bold text-lg mb-4">${{ product.price }}</p>
        <p class="text-gray-500">Material: {{ product.material }}</p>
    </div>
</template>

<script>

export default {
    props:{
        products:{
            type: Object,
            required:true
        }
    },
    methods:{
        showSingleProduct(id){
             this.$router.push({ name: 'product', params: {id} })
        }
    },
}
</script>

<style>

</style>