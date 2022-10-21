<script setup lang="ts">
import { ref } from 'vue'

import type { Mask } from '@composables/use-mask'
import { useMask } from '@composables/use-mask'
import type { InputCore } from '../types'

const props = withDefaults(
  defineProps<{
    id: InputCore['id']
    error?: InputCore['error']
    mask?: Mask
    size?: InputCore['size']
    modelValue: InputCore['modelValue']
  }>(),
  {
    size: 'medium',
  },
)

const emit =
  defineEmits<{
    (e: 'update:modelValue', event: string): void
  }>()
const { maskValue, vMask } = useMask(props.mask)

function emitInput({ target }: Event) {
  emit('update:modelValue', target?.value as string)
}

const input = ref('')
defineExpose({
  input,
})
</script>

<template>
  <input
    :id="`input-${id}`"
    ref="input"
    v-mask="maskValue"
    :data-testid="`input-${id}`"
    class="pea-input-core"
    :class="[`0${size}`, { '-error': error }]"
    @input="emitInput"
  >
</template>

<style lang="scss">
.pea-input-core-core {
  @apply relative;
  @apply w-full;
  @apply border-a-xs border-brand-primary-light rounded-sm;
  @apply bg-neutral-high-light text-brand-primary-pure;
  @apply cursor-pointer appearance-none outline-none;

  &.-small {
    @apply h-xs px-micro;
    @apply fonts-body-medium-regular;
  }

  &.-medium {
    @apply h-md px-4xs;
    @apply fonts-body-large-regular;
  }

  &:focus-visible {
    @apply border-neutral-low-dark;
  }
  &:not(:placeholder-shown):invalid,
  &.-error {
    @apply border-feedback-negative;
  }

  &:disabled {
    @apply bg-neutral-high-light;
    @apply border-neutral-high-medium;
    @apply cursor-not-allowed;
  }

  &::placeholder {
    @apply text-brand-primary-pure;
  }
}
</style>
