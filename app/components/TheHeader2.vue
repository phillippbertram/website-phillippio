<template>
  <!--Navbar Start-->
  <nav
    id="navbar"
    class="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark"
  >
    <div class="container">
      <!-- LOGO -->
      <a class="navbar-brand logo" href="/">
        <img src="~assets/logo.png" alt class="logo-dark">
      </a>
      <button
        class="navbar-toggler"
        type="button"
        aria-label="Toggle navigation"
        @click="toggleMenu()"
      >
        <i class="mdi mdi-menu" />
      </button>
      <div id="navbarCollapse" class="collapse navbar-collapse">
        <ul id="mySidenav" class="navbar-nav mx-auto navbar-center">
          <li class="nav-item">
            <a v-scroll-to="'#home'" href="javascript: void(0);" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a
              v-scroll-to="{ el: '#about', offset: -2}"
              href="javascript: void(0);"
              class="nav-link"
            >About</a>
          </li>
          <li class="nav-item">
            <a
              v-scroll-to="{ el:'#pricing', offset: -2}"
              href="javascript: void(0);"
              class="nav-link"
            >Pricing</a>
          </li>
          <li class="nav-item">
            <a
              v-scroll-to="{ el:'#blog', offset: -1}"
              href="javascript: void(0);"
              class="nav-link"
            >Blog</a>
          </li>
          <li class="nav-item">
            <a
              v-scroll-to="{ el:'#contact', offset:-50}"
              href="javascript: void(0);"
              class="nav-link"
            >Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- Navbar End -->
</template>

<script>

export default {
  mounted: () => {
    window.onscroll = function () {
      onwindowScroll()
    }
    const navbar = document.getElementById('navbar')

    function onwindowScroll () {
      if (document.body.scrollTop > 50 ||
          document.documentElement.scrollTop > 50
      ) {
        navbar.classList.add('nav-sticky')
      } else {
        navbar.classList.remove('nav-sticky')
      }
    }
  },
  methods: {
    /**
     * Toggle menu
     */
    toggleMenu () {
      document.getElementById('navbarCollapse').classList.toggle('show')
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/_variables.scss';

.nav-item {
  .nav-link {
    display: inline-block;
    color: $bg-dark;
    text-decoration: none;
    // font-family: $font-secondary;
  }
}

.navbar-custom {
  padding: 14px 0;
  width: 100%;
  border-radius: 0;
  z-index: 999;
  margin-bottom: 0;
  transition: all 0.5s ease-in-out;
  background-color: transparent;

  .logo {
    .logo-dark {
      display: none;
    }

    .logo-light {
      display: inline-block;
    }
  }

  .navbar-nav {
    li {
      a {
        line-height: 26px;
        color: $white;
        font-size: 15px;
        font-weight: 600;
        transition: all 0.3s;
        background-color: transparent !important;
        padding: 6px 0;
        margin: 0 20px;
      }

      &:last-child {
        a {
          margin-right: 0;
        }
      }

      .nav-link {
        padding-right: 0;
        padding-left: 0;
      }
    }

    li.active a, li a:hover, li a:active {
      color: $theme-color-primary !important;
    }
  }

  .navbar-toggles {
    padding: .25rem .75rem;
    font-size: 18px;
    background: 0 0;
    border: 1px solid transparent;
    color: $white;
    outline: 0;
  }

  .logo {
    .logo-dark {
      display: inline-block;
    }

    .logo-light {
      display: none;
    }
  }
}

.navbar-toggler {
  font-size: 24px;
  margin-top: 5px;
  margin-bottom: 0;
  color: $white;
}

.nav .open > a,
.nav .open > a:focus,
.nav .open > a:hover {
  background-color: transparent;
  border-color: $theme-color-primary;
}

.menu-toggle {
  padding: 4.5px 10px !important;

  span {
    line-height: 27px;
  }
}

// ***** NAVBAR LIGHT ***** //
.navbar-light {
  .navbar-nav {
    li {
      a {
        color: rgba($white, 0.6) !important;
      }
    }

    li.active a, li a:hover, li a:active {
      color: $white !important;
    }
  }

  .logo {
    .logo-dark {
      display: none;
    }

    .logo-light {
      display: inline-block;
    }
  }

  .nav-link {
    &:after {
      background: transparent;
    }
  }

  .navbar-toggler {
    border-color: transparent;
  }
}

.navbar-light .navbar-nav li.active a,
.navbar-light .navbar-nav li a:hover,
.navbar-light .navbar-nav li a:active {
  color: $white !important;
}

/*---NAVBAR STICKY--*/

.nav-sticky {
  &.navbar-custom {
    margin-top: 0;
    background-color: $black;
    box-shadow: 0 0 10px 0 rgba($black, 0.06);
    color: $white !important;

    .navbar-toggles {
      padding: .25rem .75rem;
      border: 1px solid transparent;
      outline: 0;
    }

    .navbar-nav {
      margin-top: 0;

      li {
        a {
          //color: darken($muted, 6%) !important;
          color: $white !important;
        }
      }

      li.active a, li a:hover, li a:active {
        color: $theme-color-primary !important;
      }
    }
  }

  .logo {
    .logo-dark {
      display: inline-block !important;
    }

    .logo-light {
      display: none !important;
    }
  }
}

.navbar-toggler {
  &:focus {
    outline: none;
  }
}

@media (min-width: 200px) and (max-width: 768px) {
  .navbar-custom {
    margin-top: 0;
    background-color: $white !important;
    box-shadow: 0 3px 10px rgba($black, 0.08);
    color: $white !important;

    .navbar-nav {
      margin-top: 0;

      li {
        a {
          transition: all 0.4s;
          //color: $muted !important;
          color: $white !important;
          margin: 0;
        }

        &.active {
          a {
            border-color: transparent;
          }
        }
      }

      li.active a, li a:hover, li a:active {
        color: $theme-color-primary !important;
      }
    }

    & > .container {
      width: 90%;
    }

    .logo {
      .logo-dark {
        display: inline-block !important;
      }

      .logo-light {
        display: none !important;
      }
    }

    &.navbar-light {
      .navbar-nav {
        li.active a, li a:hover, li a:active {
          color: $bg-dark !important;
        }
      }
    }
  }
  .navbar-toggler {
    font-size: 24px;
    margin-top: 0;
    margin-bottom: 0;
    color: $bg-dark;
  }
  .navbar-collapse {
    padding: 0 20px;
  }
  .navbar-light {
    .nav-item {
      .nav-link:after {
        background: $bg-dark;
      }
    }
  }
}
</style>
