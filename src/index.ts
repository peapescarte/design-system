import type { App } from 'vue'

import { PeaButton } from './components/forms/button'
import { PeaInputText, PeaInputTextPassword, PeaInputTextarea } from './components/forms/inputs'

import { PeaMenu } from './components/menus/menu'
import { PeaMenuItemLink } from './components/menus/menu-item/menu-item-link/'
import { PeaMenuNavigationLinks } from './components/menus/menu-navigation-links'

import { PeaModal } from './components/modal'

import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import 'virtual:windi-utilities.css'

import '@/assets/style.css'

export { useToast } from './composables/use-toast'
export { useModal } from './composables/use-modal'
export { useMask, vMask } from './composables/use-mask'
export {  useNavigate,useNavigateProvider } from './composables/use-navigate'

export { useSelectableChip } from './composables/use-filters'

// FIXME
// eslint-disable-next-line no-console
console.log('%c🐟[xxxx]🐟', 'padding: 8px;background: #212121;color: gold; font-family: \'Fira code\'; font-weight: bold; font-size: 1.2rem')

export const components = {
  PeaButton,
  PeaInputTextarea,
  PeaInputText,
  PeaInputTextPassword,
  PeaMenu,
  PeaMenuItemLink,
  PeaMenuNavigationLinks,
  PeaModal,
}

export function install(App: App) {
  for (const component in components) {
    App.component(component, components[component as keyof typeof components])
  }
}

export {
  PeaButton,
  PeaInputTextarea,
  PeaInputText,
  PeaInputTextPassword,
  PeaMenu,
  PeaMenuItemLink,
  PeaMenuNavigationLinks,
  PeaModal,
}
