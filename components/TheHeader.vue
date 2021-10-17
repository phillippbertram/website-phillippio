<template>
  <nav id='nav' class='sm:container sm:mx-auto'>
    <!-- Header start -->
    <div
      class='z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-6'
    >
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
            @click='showModal()'
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
            @click='showModal()'
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
          @click='showModal()'
        ></div>
        <!--          -->
        <main
          class='flex flex-col items-center justify-center h-full w-full'
        >
          <transition name='fade-up-down'>
            <div
              v-show='modal'
              class='modal-wrapper flex items-center z-30'
            >
              <div
                class='modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-light-400 dark:bg-dark-500 max-h-screen shadow-lg flex-row rounded-xl relative'
              >
                <div
                  class='modal-header flex justify-between gap-10 p-5 border-b border-light-600 dark:border-dark-400'
                >
                  <h5
                    class=' text-primary-600 dark:text-light text-2xl'
                  >
                    What project are you looking for?
                  </h5>
                  <button
                    class='px-4 font-bold text-primary-600 dark:text-light'
                    @click='showModal()'
                  >
                    X
                  </button>
                </div>
                <div
                  class='modal-body p-5 w-full h-full overflow-y-auto '
                >
                  <form class='max-w-xl m-4 text-left'>
                    <div class=''>
                      <input
                        id='name'
                        class='w-full px-5 py-2 border-1 border-gray-200 dark:border-dark-500 rounded-lg text-md dark:font-medium bg-light-400 dark:bg-dark-400 test-primary-600 dark:text-light-600'
                        name='name'
                        type='text'
                        required=''
                        placeholder='Name'
                        aria-label='Name'
                      />
                    </div>
                    <div class='mt-6'>
                      <input
                        id='email'
                        class='w-full px-5 py-2 border-1 border-gray-200 dark:border-dark-500 rounded-lg text-md dark:font-medium bg-light-400 dark:bg-dark-400 text-primary-600 dark:text-light-600'
                        name='email'
                        type='text'
                        required=''
                        placeholder='Email'
                        aria-label='Email'
                      />
                    </div>
                    <div class='mt-6'>
                      <select
                        id='subject'
                        class='w-full px-5 py-2 border-1 border-gray-200 dark:border-dark-500 rounded-lg text-md dark:font-medium bg-light-400 dark:bg-dark-400 text-primary-600 dark:text-light-600'
                        name='subject'
                        type='text'
                        required=''
                        aria-label='Subject'
                      >
                        <option
                          v-for='category in categories'
                          :key='category.id'
                          :value='category.value'
                        >{{ category.name }}
                        </option
                        >
                      </select>
                    </div>

                    <div class='mt-6'>
											<textarea
                        id='message'
                        class='w-full px-5 py-2 border-1 border-gray-200 dark:border-dark-500 rounded-lg text-md dark:font-medium bg-light-400 dark:bg-dark-400 text-primary-600 dark:text-light-600'
                        name='message'
                        cols='14'
                        rows='6'
                        placeholder='Project description'
                      ></textarea>
                    </div>

                    <div class='mt-6'>
                      <button
                        class='px-6 py-2.5 text-white font-medium tracking-wider bg-primary hover:bg-primary-600 rounded-lg'
                        type='submit'
                      >
                        Send Request
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  class='modal-footer py-3 px-5 border0-t text-right'
                >
                  <button
                    class='px-6 py-2 bg-primary-400 hover:bg-primary-600 rounded-lg font-bold text-light'
                    @click='showModal()'
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </transition>
        </main>
      </div>
    </transition>
    <!-- Contact me modal end -->
  </nav>
</template>

<script>
// import ThemeSwitcher from '../ThemeSwitcher';

export default {
  components: {
    // ThemeSwitcher,
  },
  data() {
    return {
      isOpen: false,
      theme: '',
      modal: false,
      categories: [
        {
          id: 1,
          value: 'web',
          name: 'Web Application'
        },
        {
          id: 2,
          value: 'mobile',
          name: 'Mobile Applicaiton'
        },
        {
          id: 3,
          value: 'ui-ux',
          name: 'UI/UX Design'
        },
        {
          id: 4,
          value: 'branding',
          name: 'Branding'
        }
      ]
    }
  },

  created() {
    // this.theme = localStorage.getItem('theme') || 'light'
  },
  mounted() {
    // feather.replace()
    // this.theme = localStorage.getItem('theme') || 'light'
  },
  updated() {
    // feather.replace()
  },
  methods: {
    updateTheme(theme) {
      this.theme = theme
    },
    showModal() {
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
#nav a.router-link-exact-active {
  @apply text-indigo-700;
  @apply dark:text-indigo-400;
  @apply font-medium;
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
