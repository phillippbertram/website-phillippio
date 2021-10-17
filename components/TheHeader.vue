<template>
  <fixed-header>
    <header class='sticky top-0 z-10 w-full transition-all py-4 glassmorphic'>

      <nav id='nav' class='sm:container sm:mx-auto'>
        <!-- Header start -->
        <div class='z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center'>
          <!-- Header menu links and small screen hamburger menu start -->
          <div class='flex justify-between items-center px-4 sm:px-0'>
            <Logo />

            <!-- Theme switcher small screen start -->
            <!--        <theme-switcher-->
            <!--          :theme='theme'-->
            <!--          class='block sm:hidden bg-light-600 dark:bg-dark-500 hover:bg-hover-light dark:hover:bg-hover-dark hover:shadow-sm px-2.5 py-2 rounded-lg ml-10'-->
            <!--          @themeChanged='updateTheme'-->
            <!--        />-->
            <!-- Theme switcher small screen end -->

            <!-- Small screen humberger menu start -->
            <div class='sm:hidden'>
              <button
                type='button'
                class='focus:outline-none'
                @click='isOpen = !isOpen'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  class='h-7 w-7 fill-current text-dark-500 dark:text-light-600'
                >
                  <path
                    v-if='isOpen'
                    fill-rule='evenodd'
                    d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'
                    clip-rule='evenodd'
                  ></path>
                  <path
                    v-if='!isOpen'
                    fill-rule='evenodd'
                    d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                  ></path>
                </svg>
              </button>
            </div>
            <!-- Small screen humberger menu end -->
          </div>
          <!-- Header menu links and small screen humberger menu end -->

          <!-- Header links start -->
          <div
            :class="isOpen ? 'block' : 'hidden'"
            class='m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none'
          >
            <router-link
              to='/projects'
              class='block text-left text-lg font-medium text-primary-600 dark:text-light-600 hover:text-dark-500 dark:hover:text-light-400  sm:mx-4 mb-2 sm:py-2'
            >Projects
            </router-link
            >
            <router-link
              to='/about'
              class='block text-left text-lg font-medium text-primary-600 dark:text-light-600 hover:text-dark-500 dark:hover:text-light-400  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-light dark:border-dark-500'
            >About Me
            </router-link
            >
            <router-link
              to='/contact'
              class='block text-left text-lg font-medium text-primary-600 dark:text-light-600 hover:text-dark-500 dark:hover:text-light-400  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-light dark:border-dark-500'
            >Contact
            </router-link
            >
            <div
              class='border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-light dark:border-dark-500'
            >
              <button
                class='sm:hidden block text-left text-md font-medium bg-primary hover:bg-primary-600 text-light shadow-sm rounded-md px-4 py-2 mt-2'
                @click='toggleModal()'
              >
                Contact me
              </button>
            </div>
          </div>
          <!-- Header links end -->

          <!-- Header right section buttons start -->
          <div
            class='hidden sm:flex justify-between items-center flex-col md:flex-row'
          >
            <!-- Contact me button start -->
            <div>
              <button
                class='text-md font-medium bg-primary hover:bg-primary-600 text-white shadow-sm rounded-lg px-5 py-2.5'
                @click='toggleModal()'
              >
                Contact Me
              </button>
            </div>
            <!-- Contact me button end -->

            <!-- Theme switcher larger screen start -->
            <!--        <theme-switcher-->
            <!--          :theme='theme'-->
            <!--          class='ml-8 bg-light dark:bg-dark-400-->
            <!--           px-3 py-2 shadow-sm rounded-xl cursor-pointer'-->
            <!--          @themeChanged='updateTheme'-->
            <!--        />-->
            <!-- Theme switcher larger screen end -->
          </div>
          <!-- Header right section buttons end -->
        </div>
        <!-- Header end -->

        <!-- Contact me modal start -->
        <transition name='fade'>
          <div v-show='modal' class='fixed inset-0 z-30'>
            <!-- background -->
            <div
              v-show='modal'
              class='bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20'
              @click='toggleModal()'
            ></div>
            <!-- background end -->
            <main
              class='flex flex-col items-center justify-center h-full w-full'
            >
              <transition name='fade-up-down'>
                <ContactForm @onClose='toggleModal()' v-show='modal' />
              </transition>
            </main>
          </div>
        </transition>
        <!-- Contact me modal end -->
      </nav>
    </header>
  </fixed-header>
</template>

<script>
// import ThemeSwitcher from '../ThemeSwitcher';
import FixedHeader from 'vue-fixed-header'

export default {
  components: {
    FixedHeader
    // ThemeSwitcher,
  },
  data() {
    return {
      isOpen: false,
      theme: '',
      modal: false
    }
  },
  methods: {
    updateTheme(theme) {
      this.theme = theme
    },
    toggleModal() {
      if (this.modal) {
        // Stop screen scrolling
        document
          .getElementsByTagName('html')[0]
          .classList.remove('overflow-y-hidden')
        this.modal = false
      } else {
        document
          .getElementsByTagName('html')[0]
          .classList.add('overflow-y-hidden')
        this.modal = true
      }
    }
  }
}
</script>

<style scoped>
.glassmorphic {
  @apply backdrop-filter backdrop-blur-lg bg-opacity-30;
}

/* class automatically set by fixed-header */
.vue-fixed-header--isFixed {
  @apply shadow-lg;
}

.modal-body {
  max-height: 500px;
}

@media screen and (max-width: 768px) {
  .modal-body {
    max-height: 400px;
  }
}
</style>
