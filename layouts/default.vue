<template>
  <div id='app'>
    <div class='main-container'>
      <TheHeader />
      <Nuxt />
      <TheBackToTop />
      <TheFooter />
      <!--      <TheBackToTop />-->
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // enables dark mode
    // @see https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually
    document.querySelector('html').classList.add('dark')
  }
}

</script>

<style>

body {
  /* adds background color to the body */
  @apply bg-light dark:bg-dark-500;
}

</style>
