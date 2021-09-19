<template>
  <div id="home" class="hero hero__banner bg-color-dark">
    <div class="container custom-container">
      <div class="row align-items-center">
        <div class="col-xl-6 col-lg-6 col-md-6">
          <div class="hero__content">
            <h5 class="hero__content--subtitle" v-html="hero.subTitle">
              {{ hero.subTitle }}
            </h5>
            <h1 class="hero__content--title">
              {{ hero.title }}
            </h1>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6">
          <div class="hero__thumb">
            <div class="hero__thumb--one">
              <v-lazy-image :src="hero.bgImg" class="img-fluid rotateWorld" alt="image" />
            </div>
            <div class="hero__thumb--two">
              <v-lazy-image :src="hero.image" class="img-fluid" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/scss/_variables.scss';

.hero {

  //height: 100vh;

  &__content {
    color: $theme-color-primary;
    max-width: 570px;
    float: right;
    // res
    @media #{$md-device}{
      max-width: 330px;
      padding-top: 75px;
    }
    @media #{$sm-device}{
      max-width: 472px;
      margin: auto;
      float: none;
      text-align: center;
      padding-top: 130px;
    }

    &--subtitle {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 30px;
      font-family: $heading-font;
      span {
        color: $white;
      }
      // res
      @media #{$sm-device}{
        margin-bottom: 15px;
      }
    }
    &--title {
      font-size: 48px;
      font-weight: 700;
      font-family: $heading-font;
      // res
      @media #{$md-device, $sm-device}{
        font-size: 36px;
      }
      @media #{$xs-device}{
        font-size: 30px;
      }
    }
  }
  &__thumb {
    margin-top: 100px;
    // res
    @media #{$sm-device}{
      margin-top: 30px
    }
    &--one {
      position: absolute;
      top: 100px;
      right: 100px;
      // res
      @media #{$sm-device} {
        top: 0;
        right: 0;
      }
    }
    &--two {
      position: relative;
    }
  }
}
</style>

<script>
import VLazyImage from 'v-lazy-image'

export default {
  components: {
    VLazyImage
  },
  data () {
    return {
      hero: {
        subTitle: "Hi, I'm <span>Phillipp Bertram</span>",
        title: 'CTO, Founder & passionated Developer',
        bgImg: '/img/hero/world.png',
        image: '/img/hero/hero-thumb.png'
      }
    }
  }
}
</script>
