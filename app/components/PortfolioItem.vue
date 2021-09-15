<template>
  <div class="portfolio-item">
    <div class="portfolio-item__thumb">
      <nuxt-link :to="portfolio.link">
        <v-lazy-image :src="portfolio.image" alt="portfolio image"/>
      </nuxt-link>
    </div>
    <div class="portfolio-item__content">
      <h4 class="portfolio-title">
        <nuxt-link :to="portfolio.link">{{ portfolio.title }}</nuxt-link>
      </h4>
      <p>{{ portfolio.desc }}</p>
    </div>
  </div>
</template>

<script>
import VLazyImage from "v-lazy-image";

export default {
  components: {
    VLazyImage
  },
  props: ['portfolio']
};
</script>
