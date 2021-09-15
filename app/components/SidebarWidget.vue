<template>
  <div class="sidebar-widget__wrapper">
    <!-- widget item start -->
    <div class="blog-widget mt-30">
      <h4 class="blog-widget__title">
        {{ sidebar.searchTitle }}
      </h4>
      <form class="widget-search-form">
        <input placeholder="Search keyword" type="text" class="search-field">
        <button type="submit" class="search-btn">
          <i class="fa fa-search" />
        </button>
      </form>
    </div>
    <!-- widget item end -->

    <!-- widget item start -->
    <div class="blog-widget mt-30">
      <h4 class="blog-widget__title">
        {{ sidebar.categoryTitle }}
      </h4>
      <ul class="blog-widget__categories">
        <li v-for="category in sidebar.categories" :key="category.id">
          <nuxt-link to="/blog">
            {{ category.title }}
          </nuxt-link>
          <span>({{ category.count }})</span>
        </li>
      </ul>
    </div>
    <!-- widget item end -->

    <!-- widget item start -->
    <div class="blog-widget mt-30">
      <h4 class="blog-widget__title">
        {{ sidebar.recentPostTitle }}
      </h4>
      <ul class="recent-posts-inner">
        <li v-for="post in sidebar.recentPosts" :key="post.id" class="recent-posts">
          <div class="recent-posts-image">
            <nuxt-link to="/blog/despite-not-being-built-for-business-it-does-let-you-display-01">
              <img :src="post.image" :alt="post.alt">
            </nuxt-link>
          </div>
          <div class="recent-posts-body">
            <span class="recent-posts-meta">{{ post.date }}</span>
            <h6 class="recent-posts-title">
              <nuxt-link to="/blog/despite-not-being-built-for-business-it-does-let-you-display-01">
                {{ post.title }}
              </nuxt-link>
            </h6>
          </div>
        </li>
      </ul>
    </div>
    <!-- widget item end -->

    <!-- widget item start -->
    <div class="blog-widget mt-30">
      <h4 class="blog-widget__title">
        {{ sidebar.tagTitle }}
      </h4>
      <div class="blog-tag">
        <nuxt-link v-for="tag in sidebar.tags" :key="tag.id" :to="tag.link">
          {{ tag.name }}
        </nuxt-link>
      </div>
    </div>
    <!-- widget item end -->
  </div>
</template>

<script>
export default {
  props: ['sidebar']
}
</script>
