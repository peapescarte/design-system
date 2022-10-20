import type { useField } from 'vee-validate'
import type { ComputedRef, Ref } from 'vue'


type Option = {
  name: string
  value: string
}

type Error =  ComputedRef<string | null>

type ComponentType = 'input' | 'select' | 'checkbox' | 'radio'

export interface ParentValidation<T = unknown> {
  error?: Error
  modelValue?: T
  component?: ComponentType
  selected?: Option | Option[]
  useFieldParent?: typeof useField
  rules?: Parameters<typeof useField>['1']
  opts?: Parameters<typeof useField<T>>['2']
}


export type ValidateFieldReturn<T = string> =  {
  value: Ref<T>
  errorMessage: ComputedRef<string | null> | undefined
}
