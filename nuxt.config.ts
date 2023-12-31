// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [// ...
  '@pinia/nuxt', '@nuxtjs/tailwindcss'],
  pinia: {
    autoImports: ["defineStore"]
  },
  imports: {
    dirs: ["./stores"],
  },
  css: [
    '~/assets/css/main.css',
  ],
  router: {
    routes: [
      {
        path: '/profile',
        component: '~/pages/profile.vue', // Путь к вашему компоненту
      },
      // Другие маршруты...
    ],
  },
})
