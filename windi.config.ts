import { defineConfig } from 'windicss/helpers'

import typography from 'windicss/plugin/typography'

import { borders, colors, effects, misc, screens, spacing, typography as typos, utilities } from './theme/pescarte/'

export default defineConfig({
  darkMode: 'class',
  attributify: false,
  extract: {
    include: ['index.html', 'src/**/*', '*.mdx', '*.vue'],
  },

  plugins: [
    typography(),
    utilities.outlinesForFocus,
    utilities.maxLines,
    utilities.debug,
    utilities.placeholder,
    utilities.componentTypos,
    utilities.scrollbarBase,
    utilities.iconSizes,
  ],

  theme: {
    extend: {
      ...misc,
    },

    colors,
    screens,
    ...typos,
    ...effects,
    ...borders,
    ...spacing,
  },
})
