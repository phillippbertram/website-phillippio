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
                    <i :class=social.icon></i>
                  </a>
                </li>
              </ul>
              <h3 class="footer-title">THANKS FOR STOPPING BY OUR WEBSITE!</h3>
              <p>Claritas est etiam processus dynamicus, qui sequitur mutationem .</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-5 order-2 order-md-1">
          <div class="copyright">
            <p>&copy; 2021 <b class="text-white">Phillipp Bertram</b> · Made with <i class="fa fa-heart text-danger"></i></p>
          </div>
        </div>
        <div class="col-md-7 order-1 order-md-2">
          <div class="social">
            <a :href="social.link" target="_blank" v-for="social in data.socials" :key="social.id">
              {{ social.text }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '../assets/scss/_variables.scss';

.footer-main {
  padding-top: 100px;
  padding-bottom: 96px;

  // responsive
  @media #{$sm-device} {
    padding-top: 62px;
    padding-bottom: 56px;
  }
}

.footer-area {
  color: $paragraph-light;
  font-size: 14px;
  padding: 30px 0;
  background-color: #0c0c0c;
}
.copyright {
  @media #{$sm-device}{
    text-align: center;
    padding-top: 10px;
  }
}
.social {
  text-align: right;
  // res
  @media #{$sm-device}{
    text-align: center;
  }
  a {
    color: $paragraph-light;
    line-height: 1;
    margin-left: 30px;
    // res
    @media #{$md-device, $xxs-device}{
      margin-left: 20px;
    }
    &:first-child {
      margin-left: 0;
    }
    &:hover {
      color: $theme-color-primary;
    }
  }
}
</style>

<script>
import data from '../data/footer.json';
export default {
  data () {
    return {
      data
    }
  }
};
</script>
