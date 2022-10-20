export const sizings = {
  'quark': '0.25rem',
  'nano': '0.5rem',
  'micro': '0.75rem',
  '4xs': '1rem',
  '3xs': '1.25rem',
  '2xs': '1.5rem',
  'xs': '2rem',

  'sm': '2.5rem',
  'md': '3rem',
  'lg': '3.5rem',

  'xl': '4rem',
  '2xl': '4.5rem',
  '3xl': '5rem',
  'mega': '6rem',
  '2mega': '7.5rem',
  '3mega': '10rem',
  'giga': '12.5rem',
}


export default {
  padding: {
    auto: 'auto',
    '0': '0',
    ...sizings,
  },

  margin: {
    auto: 'auto',
    '0': '0',
    ...sizings,
  },
}

