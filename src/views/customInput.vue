<template>
  <div>
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      @input="updateValue($event.target.value)"
      class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
    />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,  
    label: String,
    type: {
      type: String,
      default: 'text',
    },
    id: String,
    placeholder: {
      type: String,
      default: '',
    }
  },
  methods: {
    updateValue(value) {
      this.$emit('update:modelValue', value);  
    }
  }
}
</script>
