<template>
  <div class="blog-post">
    <div class="blog-post__thumb">
      <nuxt-link :to="`/blog/${blogData.slug}`">
        <v-lazy-image
          :src="blogData.image"
          alt="blog image"
        />
      </nuxt-link>
    </div>
    <div class="blog-post__content">
      <h4 class="blog-title">
        <nuxt-link :to="`/blog/${blogData.slug}`">
          {{ blogData.title }}
        </nuxt-link>
      </h4>
      <div class="blog-meta d-flex justify-content-between">
        <div class="date">
          {{ blogData.postDate }}
        </div>
        <ul class="blog-meta-action">
          <li>
            <button>
              <i class="fa fa-comment" />
              {{ blogData.comment }}
            </button>
          </li>
          <li>
            <button>
              <i class="fa fa-heart-o" />
              {{ blogData.like }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

import VLazyImage from 'v-lazy-image'

export default {
  components: {
    VLazyImage
  },
  props: ['blogData']
}
</script>
