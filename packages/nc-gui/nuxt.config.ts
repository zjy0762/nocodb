export default defineNuxtConfig({
  build: {
    transpile: ['socket.io-client'],
    rollupOptions: {
      resolve: {
        alias: {
          'socket.io-client': require.resolve('socket.io-client/dist/socket.io.min.js')
        }
      }
    }
  },
  vite: {
    resolve: {
      preserveSymlinks: true,
      alias: {
        'socket.io-client': 'socket.io-client/dist/socket.io.min.js'
      }
    }
  },
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-windicss',
    'nuxt-icon',
    '@nuxt/image',
    '@nuxt/ui'
  ]
})