<template>
  <footer class="footer-area">
    <div class="footer-main dark-bg section-padding">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="footer-content text-center">
              <ul class="footer-social-link">
                <li v-for="(social, socials) in data.socials" :key="socials">
                  <a :href="social.link" target="_blank">
                    <i :class="social.icon" />
                  </a>
                </li>
              </ul>
              <h3 class="footer-title">
                THANKS FOR STOPPING BY MY WEBSITE <span class="fa fa-rocket text-danger" />
              </h3>
              <p>Claritas est etiam processus dynamicus, qui sequitur mutationem .</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom black-bg">
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <div class="copyright">
              <p>
                &copy; {{ copyrightYear }} <b class="text-white">Phillipp Bertram</b> · Made with <i
                  class="fa fa-heart text-danger"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '../assets/scss/_variables.scss';

.footer-content {
  .footer-title {
    color: $white;
    font-weight: 800;
    letter-spacing: 3px;
    padding: 40px 0 25px;

    // responsive
    @media #{$sm-device} {
      font-size: 16px;
      line-height: 1.8;
    }
  }

  p {
    font-size: 14px;
    font-style: italic;
  }
}

.footer-main {
  padding-top: 100px;
  padding-bottom: 96px;
  background-color: $bg-light;

  // responsive
  @media #{$sm-device} {
    padding-top: 62px;
    padding-bottom: 56px;
  }
}

.footer-bottom {
  padding: 38px 0;
}

.footer-area {
  color: $paragraph-light;
  font-size: 14px;
  background-color: #0c0c0c;
}

.copyright {
  @media #{$sm-device}{
    text-align: center;
    padding-top: 10px;
  }
}

.footer-social-link {
  li {
    display: inline-block;
    margin-right: 15px;

    &:last-child {
      margin-right: 0;
    }

    a {
      height: 36px;
      width: 36px;
      line-height: 36px;
      font-size: 16px;
      display: block;
      color: #8f8f8f;
      border-radius: 50%;
      border: 1px solid #8f8f8f;
    }

    &:hover {
      a {
        color: $white;
        background-color: $theme-color-primary;
        border-color: $theme-color-primary;
      }
    }
  }
}

</style>

<script>
import data from '../data/about.json'

export default {
  data () {
    return {
      copyrightYear: (new Date()).getFullYear(),
      data
    }
  }
}
</script>
