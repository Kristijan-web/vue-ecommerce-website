<template>
    <div class="bg-gray-100 p-6 rounded-lg shadow-md">
      <p class="text-gray-600 italic">"{{ review }}"</p>
      <p class="text-gray-800 font-semibold mt-4">- {{ userName }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      userName: {
        type: String,
        required: true
      },
      review: {
        type: String,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
 
  </style>
  