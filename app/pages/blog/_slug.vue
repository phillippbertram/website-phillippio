<template>
  <div>
    <div class="breadcrumb-area">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="breadcrumb-wrap text-center">
              <div class="section-title">
                <span class="water-text">Blog Details</span>
                <h1 class="title">
                  Blog Details
                </h1>
              </div>
              <nav aria-label="breadcrumb">
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <nuxt-link to="/">
                      Home
                    </nuxt-link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Blog Details
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>

    <BlogDetailsWrapper />
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Blog Details',
    htmlAttrs: {
      lang: 'en',
      amp: true
    }
  }
}
</script>
