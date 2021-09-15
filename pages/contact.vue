<template>
  <div class>
    <div class="breadcrumb-area">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="breadcrumb-wrap text-center">
              <div class="section-title">
                <span class="water-text">Contact Us</span>
                <h1 class="title">Contact Us</h1>
              </div>
              <nav aria-label="breadcrumb">
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <nuxt-link to="/">Home</nuxt-link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Contact Us
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="google-map section-padding pb-0">
      <div class="container">
        <GoogleMap/>
      </div>
    </div>

    <ContactUs/>

  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Contact Us',
    htmlAttrs: {
      lang: 'en',
      amp: true
    }
  }
}
</script>
