const netilfyConfig = {
  baseURL: '/',
  buildAssetsDir: 'assets'
}
const config = process.env.NUXT_ENV == 'netilfy' ? netilfyConfig : {}
export default defineNuxtConfig({

  devtools: { enabled: false },
  plugins: ["~/plugins/i18n.js"],
  css: [
    "vue-multiselect/dist/vue-multiselect.css",
    "bootstrap/dist/css/bootstrap.min.css",
  ],

  ssr:false,
  app: {
    ...config,
    head: {
      title: "Travel agency",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },

  modules: ["@nuxtjs/i18n"],
  i18n: {
    langDir: "locales/",
    locales: [
      {
        code: "en",
        iso: "en-US",
        file: "en-US.json",
      },
      {
        code: "ar",
        iso: "ar-EG",
        file: "ar-EG.json",
      },
    ],
    defaultLocale: "ar",
  },
  nitro:{
    preset:"netlify"
  }
});
