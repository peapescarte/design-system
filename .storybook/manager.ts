import { addons } from '@storybook/addons'
import girassol from './pescarte-theme'



addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  sidebarAnimations: true,
  enableShortcuts: true,
  isToolshown: true,
  theme: girassol,
  selectedPanel: undefined,
});
