<template>
  <!-- Banner start -->
  <section
    class='flex flex-col sm:justify-between items-center sm:flex-row mt-2 sm:mt-6 lg:mt-12'
  >
    <div class='w-full sm:w-1/3 text-left'>
      <h1
        class='text-3xl sm:text-5xl text-center sm:text-left font-semibold text-ternary-dark dark:text-light'
      >
        Hi, I'm Phillipp<span class='ml-1 text-5xl dark:text-primary'>.</span>
      </h1>
      <p
        class='mt-4 text-2xml sm:text-4xl text-center sm:text-left font-semibold leading-none text-gray-400 dark:text-light-700'
      >
        {{ hero.subTitle }}
      </p>

      <div class='flex justify-center sm:block'>
        <BaseButton
          class='flex justify-center items-center mt-12 mb-6 sm:mb-0'
        >
          <i
            class='fas fa-chevron-down ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6'
          ></i>
          <span class='text-sm sm:text-lg'>Download CV</span></BaseButton
        >
      </div>

    </div>
    <div class='w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0'>
      <img
        src='~assets/img/hero/developer-dark.svg'
        alt='Developer'
      />
    </div>
  </section>
  <!-- Banner end -->
</template>

<script>

export default {
  data() {
    return {
      hero: {
        subTitle: 'CTO, Founder & passionated Developer',
        bgImg: '/img/hero/world.png',
        image: '/img/hero/hero-thumb.png'
      }
    }
  }
}
</script>
