<template>
  <header class="header-main header-transparent" :class="{'sticky': scrolled, 'navbar-style-3': 'header-style-3'}">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="menu-wrap">
            <div class="brand-logo">
              <a href="#">
                <img src="../assets/logo.png" alt="Brand Logo">
              </a>
            </div>
            <div id="hamburger" @click="display_menu()">
              <span />
              <span />
              <span />
            </div>
            <ul class="main-menu">
              <li><a href="#home" class="activee" @click="close_menu()">Home</a></li>
              <li><a href="#about" @click="close_menu()">About</a></li>
              <li><a href="#feature" @click="close_menu()">Features</a></li>
              <li><a href="#review" @click="close_menu()">Review</a></li>
              <li><a href="#screenshot" @click="close_menu()">Screenshot</a></li>
              <li><a href="#support" @click="close_menu()">Support</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'Navbar',

  data () {
    return {
      load: false,
      limitPosition: 200,
      scrolled: false,
      lastPosition: 500
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
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
            document.querySelector('.activee').setAttribute('class', ' ')
            document.querySelector('a[href*=' + i + ']').setAttribute('class', 'activee')
          }
        }
      }
    })
  },
  methods: {
    // responsive menu script
    display_menu () {
      const body = document.getElementsByTagName('body')[0];
      (!body.classList.contains('display_menu')) ? body.classList.add('display_menu') : body.classList.remove('display_menu')
    },
    close_menu () {
      const body = document.getElementsByTagName('body')[0]
      body.classList.remove('display_menu')
    },
    loaded () {
      document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
      this.load = true
    },

    // sticky menu script
    handleScroll () {
      if (this.lastPosition < window.scrollY && this.limitPosition < window.scrollY) {
        this.scrolled = true
        // move up!
      }

      if (this.lastPosition > window.scrollY) {
        this.scrolled = true
        // move down
      }

      this.lastPosition = window.scrollY
      this.scrolled = window.scrollY > 50
    }
  }
}
</script>

<style lang='scss'>
@import '../assets/scss/variables.scss';

/*------- Header area start -------*/
.header-main {
  display: flex;
  z-index: 9;
  width: 100%;
  justify-content: center;
  transition: 0.4s;

  // responsive
  @media #{$md-device, $sm-device} {
    padding: 10px 0;
  }

  .menu-wrap {
    padding: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    // responsive
    @media #{$md-device, $sm-device} {
      display: block;
    }
  }

  #hamburger {
    cursor: pointer;
    position: absolute;
    right: 15px;
    top: 30px;
    display: none;
    transform: translateY(-50%);

    // responsive
    @media #{$md-device, $sm-device} {
      display: block;
    }

    span {
      height: 2px;
      margin-bottom: 5px;
      background-color: $white;
      display: block;
      transition: 0.4s;

      &:nth-child(1) {
        width: 12px;
      }

      &:nth-child(2) {
        width: 24px;
      }

      &:nth-child(3) {
        width: 12px;
      }
    }
  }
}

.main-menu {
  display: flex;
  flex-direction: row;

  // responsive
  @media #{$md-device, $sm-device} {
    width: 100%;
    display: block;
    height: 0;
    transform-origin: 50% 0;
    transition: 0.4s ease;
    background-color: #f6f6f6;
  }

  li {
    position: relative;
    margin-left: 40px;
    overflow: hidden;

    // responsive
    @media #{$lg-device} {
      margin-left: 30px;
    }

    @media #{$md-device, $sm-device} {
      opacity: 0;
      margin-left: 0;
      visibility: hidden;
    }

    a {
      color: $white;
      font-size: 13px;
      font-weight: 600;
      padding: 50px 0;
      display: inline-block;
      text-transform: uppercase;
      position: relative;

      // responsive
      @media #{$md-device, $sm-device} {
        color: $black-soft;
        line-height: 1;
        padding: 15px 0 15px 15px !important;
        display: block;
      }

      &:before {
        top: 50%;
        left: -100%;
        content: '';
        height: 2px;
        width: 100%;
        background-color: $white;
        position: absolute;
        transition: 0.4s;

        // responsive
        @media #{$md-device, $sm-device} {
          display: none;
        }
      }

      &:hover,
      &.activee {
        &:before {
          left: 0;
        }
      }
    }

    &:first-child {
      margin-left: 0;
    }
  }
}

.display_menu {
  .header-main {
    #hamburger {
      span:nth-child(1) {
        transform: rotate(45deg) translate(2px, 1px);
      }

      span:nth-child(2) {
        transform: rotate(-45deg);
      }

      span:nth-child(3) {
        transform: rotate(45deg) translate(6px, -9px);
      }
    }

    .main-menu {
      // responsive
      @media #{$md-device, $sm-device} {
        height: auto;
      }

      li {
        // responsive
        @media #{$md-device, $sm-device} {
          line-height: 1;
          border-bottom: 1px solid #a9a9a9;
          transition: 0.4s;
          opacity: 1;
          display: block;
          visibility: visible;
        }

        &:last-child {
          border-bottom: none;
        }
      }
    }
  }
}

// header main style 2
.header-main2 {
  .main-menu {
    &__style-2 {
      li {
        a {
          color: $black-soft;
          padding: 40px 0;

          &:before {
            display: none;
          }

          &:hover,
          &.activee {
            color: $theme-color-primary;
          }
        }
      }
    }
  }
}

// header transparent
.header-transparent {
  top: 0;
  left: 0;
  width: 100%;
  position: fixed;
}

.header-main {
  &.sticky {
    background-color: #7E495D;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.27);

    .main-menu {
      li {
        a {
          padding: 30px 0;
        }
      }
    }

    &.navbar-style-2 {
      background-color: #2d3e50;
    }

    &.navbar-style-3 {
      background-color: #252525;
    }
  }
}

.header-main2 {
  &.sticky {
    background-color: $white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.27);
    position: fixed;
    top: 0;

    .main-menu {
      li {
        a {
          padding: 30px 0;
        }
      }
    }
  }

  #hamburger {
    span {
      background-color: $black-soft;
    }
  }
}
.bg-ebony {
  &.sticky {
    background-color: #2e3138;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.27);
    position: fixed;
    top: 0;
  }
}

</style>
