<template>
  <div class='w-full sm:w-1/2'>
    <div class='leading-loose'>
      <form class='max-w-xl m-4 p-6 sm:p-10 bg-light dark:bg-dark-400 rounded-xl shadow-xl text-left'>
        <p class='text-primary-dark dark:text-light text-2xl font-semibold mb-8'>
          Contact Form
        </p>
        <div>
          <label
            class='block text-lg text-primary-dark dark:text-light mb-2'
            for='name'
          >Full Name</label
          >
          <input
            class='w-full px-5 py-2 border-0 text-primary-dark dark:text-light-400 bg-light-400 dark:bg-dark-300 rounded-md shadow-sm text-md dark:font-medium'
            id='name'
            name='name'
            type='text'
            required=''
            placeholder='Your Name'
            aria-label='Name'
          />
        </div>
        <div class='mt-6'>
          <label
            class='block text-lg text-primary-dark dark:text-light mb-2'
            for='email'
          >Email</label
          >
          <input
            class='w-full px-5 py-2 border-0 text-primary-dark dark:text-light-400 bg-light-400 dark:bg-dark-300 rounded-md shadow-sm text-md dark:font-medium'
            id='email'
            name='email'
            type='text'
            required=''
            placeholder='Your Email'
            aria-label='Email'
          />
        </div>
        <div class='mt-6'>
          <label
            class='block text-lg text-primary-dark dark:text-light mb-2'
            for='subject'
          >Subject</label
          >
          <input
            class='w-full px-5 py-2 border-0 text-primary-dark dark:text-light-400 bg-light-400 dark:bg-dark-300 rounded-md shadow-sm text-md dark:font-medium'
            id='subject'
            name='subject'
            type='text'
            required=''
            placeholder='Subject'
            aria-label='Subject'
          />
        </div>

        <div class='mt-6'>
          <label
            class='block text-lg text-primary-dark dark:text-light mb-2'
            for='message'
          >Message</label
          >
          <textarea
            class='w-full px-5 py-2 border-0 text-primary-dark dark:text-light-400 bg-light-400 dark:bg-dark-300 rounded-md shadow-sm text-md dark:font-medium'
            id='message'
            name='message'
            cols='14'
            rows='6'
          ></textarea>
        </div>

        <div class='mt-6'>
          <BaseButton>
            Send Message
          </BaseButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
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
  methods: {
    onClose() {
      this.$emit('onClose')
    }
  }
}
</script>
