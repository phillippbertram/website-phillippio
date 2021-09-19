export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global App headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Phillipp Bertram',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'This is an awesome description of my Nuxt app'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,600;0,700;0,800;1,400&display=swap'
      }
    ]
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module',
    'nuxt-font-loader'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'vue-scrollto/nuxt'
  ],

  plugins: [
    '@/plugins/composition-api',
    { src: '@/plugins/vue-awesome-swiper', mode: 'client' },
    { src: '@/plugins/back-to-top', mode: 'client' }
  ],

  css: [
    '~/assets/css/font-awesome.min.css',
    '~/assets/scss/style.scss'
  ],

  googleFonts: {
    download: true,
    inject: true
  }

}
