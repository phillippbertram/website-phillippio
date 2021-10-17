<template>
  <div
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
          @click='onClose()'
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
          @click='onClose()'
        >
          Close
        </button>
      </div>
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
