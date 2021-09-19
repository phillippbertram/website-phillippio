<template>
  <div>
    <NotFound v-if="error.statusCode === 404" />
    <h1 v-else>
      Whoopsy daisy...
    </h1>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  props: ['error']
}
</script>
