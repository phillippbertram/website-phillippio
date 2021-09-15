<template>
  <div>
    <NotFound v-if="error.statusCode === 404"/>
    <h1 v-else>Whoops daisy...</h1>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'empty'
}
</script>
