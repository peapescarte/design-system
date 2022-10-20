import plugin from 'windicss/plugin'

export const componentTypos = plugin(({ addUtilities, theme }) => {
  const wrapperThemeType = (path: string) => `${theme(path)}`


  const displayCommons = {
    fontFamily: wrapperThemeType('fontFamily.highlight'),
    color: wrapperThemeType('colors.neutral.low.dark'),
    lineHeight: wrapperThemeType('lineHeight.xs'),
    fontWeight: wrapperThemeType('fontWeight.regular'),
  }
  const display = {
    '.fonts-display-large': {
      ...displayCommons,
      fontSize: wrapperThemeType('fontSize.3xl'),
      '@media (min-width: 1024px)': {
        fontSize: wrapperThemeType('fontSize.mega'),
      },
    },


    '.fonts-display-medium': {
      ...displayCommons,
      fontSize: wrapperThemeType('fontSize.2xl'),
      '@media (min-width: 1024px)': {
        fontSize: wrapperThemeType('fontSize.huge'),
      },
    },

    '.fonts-display-small': {
      ...displayCommons,
      fontSize: wrapperThemeType('fontSize.xl'),
      '@media (min-width: 1024px)': {
        fontSize: wrapperThemeType('fontSize.3xl'),
      },
    },

  }

  const headingCommons = {
    fontFamily: wrapperThemeType('fontFamily.highlight'),
    lineHeight: wrapperThemeType('lineHeight.xs'),
    color: wrapperThemeType('colors.neutral.low.dark'),
    fontWeight: wrapperThemeType('fontWeight.regular'),

  }
  const heading = {
    '.fonts-heading-h1': {
      ...headingCommons,
      fontSize: wrapperThemeType('fontSize.md'),
      '@media (min-width: 1024px)': {
        fontSize: wrapperThemeType('fontSize.xl'),
      },
    },

    '.fonts-heading-h2': {
      ...headingCommons,
      fontSize: wrapperThemeType('fontSize.sm'),

      '@media (min-width: 1024px)': {
        fontSize: wrapperThemeType('fontSize.lg'),
      },
    },

    '.fonts-heading-h3': {
      ...headingCommons,
      fontSize: wrapperThemeType('fontSize.xs'),

      '@media (min-width: 1024px)': {
        fontSize: wrapperThemeType('fontSize.sm'),
      },
    },

    '.fonts-heading-h4': {
      ...headingCommons,
      fontSize: wrapperThemeType('fontSize.2xs'),

      '@media (min-width: 1024px)': {
        fontSize: wrapperThemeType('fontSize.2xs'),
      },
    },
  }

  const subtitleCommons = {
    fontFamily: wrapperThemeType('fontFamily.base'),
    lineHeight: wrapperThemeType('lineHeight.xs'),
    color: wrapperThemeType('colors.neutral.low.light'),
    fontWeight: wrapperThemeType('fontWeight.regular'),
  }
  const subtitle = {
    '.fonts-subtitle-medium': {
      ...subtitleCommons,
      fontSize: wrapperThemeType('fontSize.2xs'),
      '@media (min-width: 1024px)': {
        fontSize: wrapperThemeType('fontSize.xs'),
      },
    },

    '.fonts-subtitle-small': {
      ...subtitleCommons,
      fontSize: wrapperThemeType('fontSize.3xs'),
      '@media (min-width: 1024px)': {
        fontSize: wrapperThemeType('fontSize.2xs'),
      },
    },
  }

  const bodyCommons = {
    color: wrapperThemeType('colors.neutral.low.medium'),
    fontFamily: wrapperThemeType('fontFamily.base'),
    lineHeight: wrapperThemeType('lineHeight.xs'),
  }
  const body = {
    '.fonts-body-x-large-regular': {
      ...bodyCommons,
      fontSize: wrapperThemeType('fontSize.xs'),
      fontWeight: wrapperThemeType('fontWeight.regular'),
    },
    '.fonts-body-x-large-bold': {
      ...bodyCommons,
      fontSize: wrapperThemeType('fontSize.xs'),
      fontWeight: wrapperThemeType('fontWeight.bold'),
    },

    '.fonts-body-large-regular': {
      ...bodyCommons,
      fontSize: wrapperThemeType('fontSize.2xs'),
      fontWeight: wrapperThemeType('fontWeight.regular'),
    },

    '.fonts-body-large-bold': {
      ...bodyCommons,
      fontSize: wrapperThemeType('fontSize.2xs'),
      fontWeight: wrapperThemeType('fontWeight.bold'),
    },

    '.fonts-body-medium-regular': {
      ...bodyCommons,
      fontSize: wrapperThemeType('fontSize.3xs'),
      fontWeight: wrapperThemeType('fontWeight.regular'),
    },

    '.fonts-body-medium-bold': {
      ...bodyCommons,
      fontSize: wrapperThemeType('fontSize.3xs'),
      fontWeight: wrapperThemeType('fontWeight.bold'),
    },

    '.fonts-body-small-regular': {
      ...bodyCommons,
      fontSize: wrapperThemeType('fontSize.micro'),
      fontWeight: wrapperThemeType('fontWeight.regular'),
    },

    '.fonts-body-small-bold': {
      ...bodyCommons,
      fontSize: wrapperThemeType('fontSize.micro'),
      fontWeight: wrapperThemeType('fontWeight.bold'),
    },
  }

  const linkCommons = {
    fontFamily: wrapperThemeType('fontFamily.base'),
    lineHeight: wrapperThemeType('lineHeight.xs'),
    fontWeight: wrapperThemeType('fontWeight.regular'),
    color: wrapperThemeType('colors.neutral.low.medium'),
    textDecoration: 'underline',
    '&:hover': {
      color: wrapperThemeType('colors.neutral.low.dark'),
    },
  }
  const link = {
    '.fonts-link-inline-large': {
      ...linkCommons,
      fontSize: wrapperThemeType('fontSize.2xs'),
    },

    '.fonts-link-inline-medium': {
      ...linkCommons,
      fontSize: wrapperThemeType('fontSize.3xs'),
    },

    '.fonts-link-inline-small': {
      ...linkCommons,
      fontSize: wrapperThemeType('fontSize.micro'),
    },
  }

  const overline = {
    '.fonts-overline-small': {
      fontSize: wrapperThemeType('fontSize.2xs'),
      fontFamily: wrapperThemeType('fontFamily.base'),
      lineHeight: wrapperThemeType('lineHeight.xs'),
      fontWeight: wrapperThemeType('fontWeight.regular'),
      color: wrapperThemeType('colors.neutral.low.medium'),
      textTransform: 'uppercase',
    },
  }

  addUtilities({
    ...display,
    ...heading,
    ...subtitle,
    ...body,
    ...link,
    ...overline,
  })
})


export const outlinesForFocus = plugin(({ addUtilities }) => {
  addUtilities({
    '.outline-focused': {
      outline: '2px solid #8250DF',
      outlineOffset: '4px',
      outlineStyle: 'auto',
    },
  })
})

export const maxLines = plugin(({ addUtilities }) => {
  const total = 10
  const variants = {}

  for (let i = 1; i <= total; i++) {
    Object.assign(variants, {
      [`.max-lines-${i}`]: {
        overflow: 'hidden',
        'line-clamp': `${i}`,
        '-webkit-line-clamp': `${i}`,
        'display': '-webkit-box',
        '-webkit-box-orient': 'vertical',
      },
    })
  }

  addUtilities(variants)
})

export const debug = plugin(({ addUtilities }) => {
  addUtilities({
    '.debug': {
      outline: '2px dashed #ff0000!important',
    },

    '.debug-all': {
      outline: '2px dashed #ff0000!important',
      outlineOffset: '3px',
      '> *': {
        outline: '2px dotted #a0092f!important',
        outlineOffset: '3px',
        '> *': {
          outline: '2px dashed #00ffff!important',
          outlineOffset: '3px',
          '> *': {
            outline: '2px dotted #ff00ff!important',
            outlineOffset: '3px',
            '> *': {
              outline: '2px dashed #f0ad2aff!important',
              outlineOffset: '3px',
              '> *': {
                outline: '2px dotted #00ff00!important',
                outlineOffset: '3px',
                '> *': {
                  outline: '2px dashed #d9ffaa!important',
                  outlineOffset: '3px',
                  '> *': {
                    outline: '2px dotted #2adeff!important',
                    outlineOffset: '3px',
                    '> *': {
                      outline: '2px dashed #00af2f!important',
                      outlineOffset: '3px',
                      '*': {
                        outline: '2px groove #0faefa!important',
                        outlineOffset: '3px',
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  })
})

export const placeholder = plugin(({ addBase, theme }) => {
  addBase({
    'input::placeholder': {
      color: 'rgb(117 117 177 / 64%)',
      fontFamily: `${theme('fontFamily.base')}`,
      fontSize: `${theme('fontSize.2xs')} `,
      lineHeight: `${theme('lineHeight.xs')}`,
      fontWeight: '400',
      
    },
  })
})

export const scrollbarBase = plugin(({ addBase }) => {
  addBase({
    '::-webkit-scrollbar': {
      width: '12px',
    },

    '::-webkit-scrollbar-track ': {
      'box-shadow': 'inset 0 0 14px 14px rgb(240 240 240 / 64%)',
      'border-color': 'rgba(240, 240, 240, 0.64)',
      'border-style': 'solid',
      'border-width': '4px',
    },

    '::-webkit-scrollbar-thumb': {
      'box-shadow': 'inset 0 0 14px 14px #222222',
      'border-color': 'transparent',
      'border-radius': '0.5rem',
      'border-style': 'solid',
      'border-width': '4px',
    },

    '::-webkit-scrollbar-button': {
      'display': 'none',
    },
  })
})

export const iconSizes = plugin(({ addUtilities }) => {
  addUtilities({
    '.icon-size-small': {
      height: '16px',
      width: '16px',
    },
    '.icon-size-medium': {
      height: '24px',
      width: '24px',
    },
    '.icon-size-large': {
      height: '32px',
      width: '32px',
    },
    '.icon-size-x-large': {
      height: '40px',
      width: '40px',
    },
    '.icon-size-giga': {
      height: '48px',
      width: '48px',
    },
  })
})