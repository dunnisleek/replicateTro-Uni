
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { 
          rel: 'stylesheet', 
          href: 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css', 
          integrity: 'sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p', 
          crossorigin: 'anonymous' ,
         
        }
      ]
    },
    
    
  },
  css: [
    '/assets/Css/main.css' // Path to your global CSS file
  ]
})


