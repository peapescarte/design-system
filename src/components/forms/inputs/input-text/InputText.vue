<script lang="ts">
import { computed, useSlots } from 'vue'

import Input from '@forms/inputs/input-core/Input.vue'

import { useValidateField } from '@composables/use-validate-field'
import type { ParentValidation, ValidateFieldReturn } from '@composables/use-validate-field/types'
import type { Mask } from '@composables/use-mask'
import type { InputText } from '../types'

type ParentValidationInput = ParentValidation<string>

export default {
  inheritAttrs: false,
}
</script>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    id: InputText['id']
    name: InputText['name']
    class?: InputText['class']
    label?: InputText['label']
    mask?: Mask
    required?: InputText['required']
    disabled?: InputText['disabled']
    size?: InputText['size']
    error?: string
    modelValue?: string
    placeholder?: string
    useField?: ParentValidationInput['useFieldParent']
    rules?: ParentValidationInput['rules']
    opts?: ParentValidationInput['opts']
  }>(),
  {
    size: 'medium',
    error: undefined,
  },
)

const emit =
  defineEmits<{
    (e: 'update:modelValue', event: string): void
  }>()

const slot = useSlots()
const hasIcon = computed(() => !!slot?.icon)
const name = computed(() => props.name ?? '')

const { value, errorMessage  } = useValidateField<string>(name.value, {
  component: 'input',
  error: computed(() => props.error),
  rules: props.rules,
  modelValue: props.modelValue,
  opts: props.opts,
  useFieldParent: props.useField,
}) as ValidateFieldReturn<string>


function emitEvent(value: string) {
  emit('update:modelValue', value)
}
</script>

<template>
  <div
    :id="`input-text-${id}`"
    :data-testid="`input-text-${id}`"
    :class="[`${$props.class}`, { '-disabled': disabled }]"
    class="pea-input-text-core"
  >
    <label
      v-if="label"
      :for="`input-text-input-${id}`"
      :data-testid="`input-text-label-${id}`"
      class="label"
      :class="`-${size}`"
      :data-required="required"
    >
      {{ label }}
    </label>

    <Input
      v-bind="$attrs"
      :id="`text-input-${id}`"
      v-model="value"
      :size="size"
      :name="name"
      :mask="mask"
      :placeholder="placeholder"
      :data-required="required"
      :error="!!errorMessage"
      :disabled="disabled"
      @update:model-value="emitEvent"
    />
  </div>
</template>

<style lang="scss">
.pea-input-text-core {
  @apply flex flex-col;

  > .label {
    @apply relative;
    @apply mb-quark;
    @apply text-left;

    &.-small {
      @apply fonts-body-small-bold;
      @apply text-neutral-low-dark;
    }

    &.-medium {
      @apply fonts-body-medium-bold;
      @apply text-neutral-low-dark;
    }

    &[data-required='true']::after {
      @apply top-3/10 right-0;
      content: '*';
    }
  }

   &.-disabled {
    > .label {
      @apply text-neutral-high-dark;
    }
  }
}
</style>
