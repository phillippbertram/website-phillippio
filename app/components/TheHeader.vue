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
                <li v-for="item in navItems" :key="item.title">
                  <nuxt-link :to="item.to">
                    {{ item.title }}
                  </nuxt-link>
                  <ul v-if="item.subMenu" class="submenu">
                    <li v-for="submenu in item.subMenu" :key="submenu.title">
                      <nuxt-link :to="submenu.to">
                        {{ submenu.title }}
                      </nuxt-link>
                    </li>
                  </ul>
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

.header-navigation-area {
  @media #{$md-device, $sm-device}{
    padding: 20px 0;
  }
}

// header logo
.logo {
  max-width: 140px;
  //res
  @media #{$sm-device} {
    max-width: 130px;
  }
}

// header navigation menu
.main-menu {
  text-align: right;

  ul {
    li {
      display: inline-block;
      position: relative;

      a {
        color: $white;
        font-weight: 500;
        display: inline-block;
        padding: 30px;
        text-transform: uppercase;
        // res
        @media #{$md-device}{
          padding: 25px 15px;
        }

        &.nuxt-link-exact-active {
          color: $theme-color-primary;
        }
      }

      &:hover > {
        a {
          color: $theme-color-primary;
        }
      }

      .submenu {
        position: absolute;
        top: 100%;
        left: 0;
        width: 200px;
        background-color: $bg-light;
        transition: 0.4s;
        z-index: 1;
        opacity: 0;
        visibility: hidden;
        transform: translateY(15px);

        li {
          display: block;
          text-align-last: left;

          a {
            color: $white;
            display: block;
            padding: 10px 20px;
            text-transform: none;

            &.nuxt-link-exact-active {
              color: $theme-color-primary;
            }
          }
        }
      }

      &:hover {
        .submenu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);

          li {
            &:hover > {
              a {
                color: $theme-color-primary;
              }
            }
          }
        }
      }

      &:last-child {
        a {
          padding-right: 0;
        }
      }
    }
  }
}

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
import navItems from '../data/navItems.json'

export default {
  components: {
    FixedHeader
  },
  data () {
    return {
      navItems
    }
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
