<template>
  <div>
    <div class="breadcrumb-area">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="breadcrumb-wrap text-center">
              <div class="section-title">
                <span class="water-text">My Latest work</span>
                <h2 class="title">
                  Latest Project
                </h2>
              </div>
              <nav aria-label="breadcrumb">
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <nuxt-link to="/">
                      Home
                    </nuxt-link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Project
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="portfolio-area section-padding">
      <div class="container">
        <div class="row align-items-center mbn-50">
          <div v-for="portfolio in data.portfolio.portfolioGallery" :key="portfolio.id" class="col-lg-3 col-sm-6">
            <PortfolioItem :portfolio="portfolio" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../../data/portfolio.json'

export default {
  data () {
    return {
      data
    }
  },
  metaInfo: {
    title: 'All Projects',
    htmlAttrs: {
      lang: 'en',
      amp: true
    }
  }
}
</script>
