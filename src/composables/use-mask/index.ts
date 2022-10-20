import { computed } from 'vue'
import { maska } from 'maska'

export const MaskPresets = {
  CPF: '###.###.###-##',
  CNPJ: '##.###.###/#####-##',
  CPF_CNPJ: ['###.###.###-##', '##.###.###/#####-##'],
  MobilePhoneDDD: '(##) # ####-####',
} as const

export type Mask = string | string[] | { preset: keyof typeof MaskPresets; mask?: string; tokens?: any; preprocessor?: (value: string) => string }


export const vMask = maska

export function useMask(maskProp?: Mask) {
  const vMask = maska

  const maskValue = computed(() => {
    if (maskProp?.hasOwnProperty('preset')) {
      const { preset } = maskProp as { preset: keyof typeof MaskPresets }  
      return MaskPresets[preset]
    }

    return maskProp
  })


  return {
    vMask,
    maskValue,
  }
}