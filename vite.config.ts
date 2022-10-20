import path from 'path'
import { defineConfig } from 'vitest/config'

import vue from '@vitejs/plugin-vue'

import Icons from 'unplugin-icons/vite'

import Inspect from 'vite-plugin-inspect'
import WindiCSS from 'vite-plugin-windicss'

import BoiaComponentsTypes  from './vite-modules/generate-component-types'

const currentPath = path.resolve(__dirname)

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "boia",
      fileName: (format) => `boia.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(currentPath, './src'),
      '@assets': path.resolve(currentPath, './src/assets'),
      '@composables': path.resolve(currentPath, './src/composables'),
      '@components': path.resolve(currentPath, './src/components'),
      '@forms': path.resolve(currentPath, './src/components/forms'),
      '@themes': path.resolve(currentPath, 'theme'),
    },
  },

  plugins: [
    vue({
      include: [/\.vue$/],
    }) as any,

    WindiCSS(),

    Inspect({
      enabled: true,
    }),


    Icons({
      autoInstall: true,
      compiler: 'vue3',
      scale: 1.0,
    }),

    BoiaComponentsTypes(),
  ],

  optimizeDeps: {
    include: [
      'vue',
      '@vueuse/core',
    ],
  },

  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/components/**/*.spec.ts', 'src/composables/**/*.spec.ts'],
    coverage: {
      provider: 'c8',
      extension: 'vue',
      lines: 90,
      branches: 90,
      statements: 90,
      functions: 90,
    },
    deps: {
      inline: ['@vue', '@vueuse'],
    },
  },
})
