import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  app: {
    head: {
      title: '太初实验室 - 探索未知始于太初',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/imgs/favicon.png'}
      ],
    },
    buildAssetsDir: '/assets',
  },
  css: ['~/public/css/global.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  devtools: { enabled: true },
  ssr: false,
  modules: ['usebootstrap'],
  usebootstrap: {
    scss: true,
    image: false,
    fonts: false,
    sitemap: false,
    robots: true,
    shiki: false,
    leaflet: false,
    mdc: false,
    tiptap: false,
    pwa: false,
    aos: false,
    echarts: false,
   },
   build: {
    analyze: true,
    transpile: ['bootstrap'],
  },
  webpack: {
    optimizeCSS: true,
    optimization: {
      chunkIds: 'named',
      mergeDuplicateChunks: true,
      nodeEnv: 'production',
      CommonsChunk: {
        name: 'commons',
        filename: 'commons.js',
        async: true,
      },
      minimize: true,
    },
  },
})