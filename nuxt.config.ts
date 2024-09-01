// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'NewsHub',
      meta: [
        {
          name: 'description',
          content: 'This platform brings you the news of the world'
        }
      ],
      link: [
        {
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap',
        }
      ]
    }
  },
  runtimeConfig: {
    newsAPIKey: process.env.NEWS_API_KEY,
  }
})
