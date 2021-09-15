<template>
  <div>
    <div class="breadcrumb-area">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="breadcrumb-wrap text-center">
              <div class="section-title">
                <span class="water-text">Latest Blog</span>
                <h2 class="title">Latest Blog</h2>
              </div>
              <nav aria-label="breadcrumb">
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <nuxt-link to="/">Home</nuxt-link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Blog
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>

    <BlogMainWrapper/>
  </div>
</template>

<script>

export default {
  metaInfo: {
    title: 'Latest Blog',
    htmlAttrs: {
      lang: 'en',
      amp: true
    }
  }
}
</script>
