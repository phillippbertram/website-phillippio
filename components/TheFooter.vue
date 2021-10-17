<template>
  <footer class='pt-12'>
    <!-- footer top start -->
    <div class='container'>
      <div class='text-center dark:text-light mt-8 border-t border-light-700 py-12'>
        <div
          class='flex flex-col justify-center items-center mb-4 sm:mb-8'
        >
          <div class='flex gap-4 sm:gap-8'>
            <a
              v-for='social in data.socials'
              :key='social.id'
              :href='social.url'
              target='__blank'
              class='inline-flex justify-center items-center text-light-600 hover:text-primary hover:border-primary-400 dark:hover:text-primary-400 cursor-pointer border rounded-full w-12 h-12'
            >
              <i class="text-2xl" :class='social.icon'/>
            </a>
          </div>
        </div>
        <h3 class='text-2xl font-semibold uppercase'>
          Thanks for stopping by my website <span />
        </h3>
      </div>
      <!-- footer top end -->
    </div>
    <!-- footer bottom start -->
    <div class='bg-dark-700'>
      <div class='container text-center py-8 text-light-700 font-light'>
        <p>
          &copy; {{ copyrightYear }} <b class='text-white font-regular'>Phillipp Bertram</b> · Made with <i class='fas fa-heart text-red-500'/>
        </p>
      </div>
    </div>
    <!-- footer bottom end -->

  </footer>
</template>

<script>
import data from '../data/about.json'

export default {
  data() {
    return {
      copyrightYear: (new Date()).getFullYear(),
      data
    }
  }
}
</script>
