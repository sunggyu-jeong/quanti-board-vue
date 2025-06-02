// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@nuxt/eslint',
    '@pinia/nuxt'
  ],
  eslint: {
    lintOnStart: true,
    fix: true,
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css'
  }
})