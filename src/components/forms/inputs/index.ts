import type { App } from 'vue'
import PeaInputText from './input-text/InputText.vue'

PeaInputText.install = (app: App) => app.component('PeaInputText', PeaInputText)

export {
  PeaInputText,
}
