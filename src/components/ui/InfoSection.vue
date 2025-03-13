<template>
    <section class="mb-8 text-center">
      <h2 class="text-2xl font-semibold text-gray-700">{{ title }}</h2>
      <p class="mt-4 text-gray-600">{{ textAbove }}</p>
      <img :src="require(`@/assets/images/${imageSrc}`)" :alt="imageAlt" class="w-full max-w-md mx-auto my-6 rounded-lg shadow-md" />
      <p class="text-gray-600 italic">{{ textBelow }}</p>
    </section>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      textAbove: {
        type: String,
        required: true
      },
      imageSrc: {
        type: String,
        required: true
      },
      imageAlt: {
        type: String,
        default: 'Image description'
      },
      textBelow: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>

  </style>
  