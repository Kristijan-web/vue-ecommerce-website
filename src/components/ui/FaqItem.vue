<template>
    <div class="bg-gray-100 p-4 rounded-lg shadow-md">
      <h3 class="text-lg font-semibold text-gray-800">{{ question }}</h3>
      <p class="text-gray-600">{{ answer }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      question: {
        type: String,
        required: true
      },
      answer: {
        type: String,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>

  </style>
  