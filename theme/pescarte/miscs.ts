import { sizings } from './spacing'

export default {
  width: {
    'fit-content': 'fit-content',
    ...sizings,
  },
  
  height: sizings,
  minHeight: sizings,  
  maxHeight: sizings,
  minWidth: sizings,
  maxWidth: sizings,
  
  spacing: sizings,
  
  colors: {
    transparent: 'transparent',
  },

  outline: {
    focused: '',
    'focused-invert': '',
  },
}