<template>
  <fixed-header>
    <div class="header-navigation-area header-transparent">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 col-lg-3 col-8">
            <div class="logo">
              <nuxt-link to="/">
                <img src="~assets/logo.png" alt="Brand Logo">
              </nuxt-link>
            </div>
          </div>
          <div class="col-lg-9 d-none d-lg-block">
            <nav class="main-menu">
              <ul>
                <li>
                  <nuxt-link to="/">
                    HOME
                  </nuxt-link>
                </li>
                <li>
                  <a href="#about">
                    ABOUT ME
                  </a>
                </li>
                <li>
                  <nuxt-link to="/project">
                    PROJECT
                  </nuxt-link>
                  <ul class="submenu">
                    <li>
                      <nuxt-link to="/project">
                        Project
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/project/project-details">
                        Project Details
                      </nuxt-link>
                    </li>
                  </ul>
                </li>
                <li>
                  <nuxt-link to="/blog">
                    BLOG
                  </nuxt-link>
                  <ul class="submenu">
                    <li>
                      <nuxt-link to="/blog">
                        Blog
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/blog/how-to-get-your-website-into-google-index-with-right-way-04">
                        Blog Details
                      </nuxt-link>
                    </li>
                  </ul>
                </li>
                <li>
                  <nuxt-link to="/contact">
                    CONTACT
                  </nuxt-link>
                </li>
              </ul>
            </nav>
          </div>
          <div class="col-md-6 col-4 d-block d-lg-none">
            <div class="mobile-navigation-icon" @click="mobileToggleClass('addClass', 'active')">
              <i />
            </div>
          </div>
        </div>
      </div>
    </div>
  </fixed-header>
</template>

<style lang="scss" scoped>
@import '../assets/scss/_variables.scss';

.header-transparent {
  top: 0;
  left: 0;
  width: 100%;
  position: fixed;
  z-index: 999;
  background-color: transparent;

  &.vue-fixed-header--isFixed {
    background-color: #0c0c0c;
    box-shadow: 0 0 12px 1px rgba(0, 0, 0, 0.3);
    animation: 900ms cubic-bezier(0.2, 1, 0.22, 1) 0s normal none 1 running fadeInDown;
  }
}

.mobile-navigation-icon {
  width: 26px;
  height: 20px;
  cursor: pointer;
  float: right;
  position: relative;

  i {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 2px;
    background-color: $white;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:before,
    &:after {
      content: "";
      bottom: 8px;
      left: 0;
      width: 100%;
      height: 2px;
      position: absolute;
      background-color: $white;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    &:after {
      bottom: -8px;
    }
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>

<script>
import FixedHeader from 'vue-fixed-header'

export default {
  components: {
    FixedHeader
  },

  mounted () {
    (function () {
      scrollTo()
    })()

    function scrollTo () {
      const links = document.querySelectorAll('.main-menu li a')
      links.forEach(each => (each.onclick = scrollAnchors))
    }

    function scrollAnchors (e, respond = null) {
      const distanceToTop = el => Math.floor(el.getBoundingClientRect().top)
      e.preventDefault()
      const targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href')
      const targetAnchor = document.querySelector(targetID)
      if (!targetAnchor) { return }
      const originalTop = distanceToTop(targetAnchor)
      window.scrollBy({ top: originalTop - 75, left: 0, behavior: 'smooth' })
      const checkIfDone = setInterval(function () {
        const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 0
        if (distanceToTop(targetAnchor) === 0 || atBottom) {
          targetAnchor.tabIndex = '-1'
          targetAnchor.focus()
          clearInterval(checkIfDone)
        }
      }, 800)
    }
    // scroll spy js
    window.addEventListener('load', function () {
      const section = document.querySelectorAll('.main-container > *')
      const sections = {}
      let i = 0

      Array.prototype.forEach.call(section, function (e) {
        sections[e.id] = e.offsetTop - 85
      })

      window.onscroll = function () {
        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop

        for (i in sections) {
          if (sections[i] <= scrollPosition) {
            document.querySelector('.nuxt-link-exact-active').setAttribute('class', ' ')
            document.querySelector('a[href*=' + i + ']').setAttribute('class', 'nuxt-link-exact-active')
          }
        }
      }
    })
  },

  methods: {
    mobileToggleClass (addRemoveClass, className) {
      const el = document.querySelector('#offcanvas-menu  ')
      if (addRemoveClass === 'addClass') {
        el.classList.add(className)
      } else {
        el.classList.remove(className)
      }
    }
  }
}
</script>
