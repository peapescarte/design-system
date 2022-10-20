
import { useField } from 'vee-validate'
import { ref } from 'vue'

import type { ParentValidation } from './types'


export function useValidateField<T = unknown>(name: string, parentValidation?: ParentValidation<T>) {
  const willParentValidate =   parentValidation?.component === 'input' && (parentValidation?.error?.value !== null|| parentValidation?.modelValue !== undefined)
  const willParentValidateRadio =   parentValidation?.component === 'radio' && (parentValidation?.error?.value !== null|| parentValidation?.modelValue !== undefined)
  const willParentValidateCheckbox =   parentValidation?.component === 'checkbox' && (parentValidation?.error?.value !== null|| parentValidation?.modelValue !== undefined)
  const willParentValidateSelect = parentValidation?.component === 'select' && (parentValidation?.error?.value !== null || parentValidation?.selected !== undefined)
  
  if (parentValidation?.useFieldParent) {
    return parentValidation?.useFieldParent<T>(name)
  }

  if (parentValidation?.rules) {
    return useField<T>(name, parentValidation?.rules, parentValidation?.opts) 
  }
  
  if (willParentValidateSelect) {
    return manualValidationByParentSelect(parentValidation?.error, parentValidation?.selected)
  }
  
  if (willParentValidate || willParentValidateRadio || willParentValidateCheckbox) {
    return manualValidationByParent(parentValidation?.error, parentValidation?.modelValue)
  }

  return useField<T>(name)
}

function manualValidationByParent(error: ParentValidation['error'], modelValue: ParentValidation['modelValue']) {
  const value = ref(modelValue ?? '')
  return {
    value,
    errorMessage: error,
  }
}

function manualValidationByParentSelect(error: ParentValidation['error'], selected: ParentValidation['selected']) {
  const value = ref(selected)
  return {
    value,
    errorMessage: error,
  }
}
