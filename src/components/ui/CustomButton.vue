<template>
    <button  id="btn" class="py-3 px-6 font-semibold text-lg rounded-md shadow-sm" :class="buttonClass">
      {{ text }}
    </button>
  </template>
  
  <script>
  export default {
    props: {
      text: {
        type: String,
        required: true
      },
      buttonClass: {
        type: String,
        default: 'bg-orange-500 hover:bg-orange-600 text-white'
      }
    },
  };
  </script>
  
  <style scoped>
#btn{
  background-color: #EF5B2A;
}
#btn:hover{
  background-color: #f5855f;
}
  </style>
  