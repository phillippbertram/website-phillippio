<template>
  <footer class='dark:text-light py-12'>
    <div class='container'>
      <!-- footer top start -->
      <div class='flex flex-col justify-center items-center text-center gap-6 pb-8'>
        <Logo />
        <h3 class='text-2xl font-semibold uppercase tracking-widest'>
          Thanks for stopping by my website
        </h3>
        <div class='social-links flex gap-2 sm:gap-3'>
          <a
            v-for='social in data.socials'
            :key='social.id'
            :href='social.link'
            target='__blank'
            class='inline-flex justify-center items-center text-light-600 hover:text-primary hover:border-primary-400 dark:hover:text-primary-400 cursor-pointer w-8 h-8'
          >
            <i class='text-lg' :class='social.icon' />
          </a>
        </div>
      </div>
      <!-- footer top end -->
      <!-- footer bottom start -->
      <div class='pt-8'>
        <div class='container text-center text-light-700 font-light'>
          <p>
            &copy; {{ copyrightYear }} <b class='text-white font-regular'>Phillipp Bertram</b> · Made with <i
            class='fas fa-heart text-red-500' />
          </p>
        </div>
      </div>
      <!-- footer bottom end -->

    </div>
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

<style lang='postcss'>
.social-links {
  position: relative;
}

.social-links::after {
  position: absolute;
  top: 50%;
  left: -60px;
  content: "";
  border-top: 1px solid gray;
  width: 50px;
}

.social-links::before {
  position: absolute;
  top: 50%;
  right: -60px;
  content: "";
  border-top: 1px solid gray;
  width: 50px;
}
</style>
