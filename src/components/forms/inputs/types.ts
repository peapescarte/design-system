type Size = 'small' | 'medium'
// input value
type ModelValue = string | number

export interface InputCore {
  id: string
  error?: boolean
  size?: Size
  modelValue: ModelValue
}

export interface InputText {
  id: string
  name: string
  label?: string
  class?: string
  required?: boolean
  disabled?: boolean
  size?: Size
}
