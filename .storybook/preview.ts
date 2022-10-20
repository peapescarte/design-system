
import "virtual:windi.css";
import 'virtual:windi-base.css'
import 'virtual:windi-devtools'
import 'virtual:windi-utilities.css'
import 'virtual:windi-components.css'

import './styles.css'


const customViewports = {
  smallMobile: {
    name: 'Small Mobile',
    styles: {
      width: '360px',
      height: '740px',
    }
  },
  mobile: {
    name: 'Mobile',
    styles: {
      width: '414px',
      height: '896px',
    }
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '800px',
      height: '1280px',
    }
  },
  largeTablet: {
    name: 'Large Tablet',
    styles: {
      width: '1280px',
      height: '800px',
    }
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1366px',
      height: '768px',
    }
  },
  macbook: {
    name: 'Macbook',
    styles: {
      width: '1440px',
      height: '900px',
    }
  } 
}

export const parameters = {
  layout: 'centered',
  backgrounds: { default: 'light' },
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: ['Introdução', 'Lib']
    }
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    source: {
      language: 'html',
      type: 'code',
      format: true,
    },
  },
  viewport: {
    viewports: customViewports
  }
}


