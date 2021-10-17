<template>
  <button
    class='text-md font-medium bg-primary hover:bg-primary-600 text-white shadow-sm rounded-lg px-5 py-2.5'
    @click='onClick()'
  >
   <slot/>
  </button>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>
