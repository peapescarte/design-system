const path = require('path')

const WindiCSS = require('vite-plugin-windicss').default

const Icons = require('unplugin-icons/vite')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: [
    {
      from: '../public',
      to: '/public',
    },
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    'storybook-addon-designs',
  ],
  framework: '@storybook/vue3',
  core: {
    builder: '@storybook/builder-vite',
  },

  async viteFinal(config) {
    config.plugins = config.plugins ?? []
    config.plugins.push(
      WindiCSS({
        config: path.join(__dirname, '..', 'windi.config.ts'),
        root: path.dirname(__dirname),
      })
    )
    config.plugins.push(
      Icons({
        autoInstall: true,
        compiler: 'vue3',
        scale: 1.0,
      })
    )
    const alias = {
      '@': path.join(__dirname, '..', './src'),
      '@themes': path.join(__dirname, '..', './theme'),
      '@components': path.join(__dirname, '..', './src/components'),
      '@composables': path.join(__dirname, '..', './src/composables'),
      '@forms': path.join(__dirname, '..', './src/components/forms'),
    }
    config.resolve.alias = {
      ...config.resolve.alias,
      ...alias,
    }
    return config
  },
}
