<script lang="ts" setup>
import colors from '@themes/pescarte/colors'

import CardColor from './CardColor.vue'

function hasSubGroup(group) {
  return typeof Object.values(group)[0] !== 'string'
}
</script>

<template>
  <div>
    <h2 class="story-title">Cores</h2>

    <p>
      Para aplicar cores nos elementos você deve prefixar com a propriedade a
      qual deseja estilizar.
    </p>
    <strong>[prefixo]-[cor]</strong>
    <p class="properties-information">
      <span class="property-variant">
        <code class="code">text-brand-primary-pure</code> => renderiza
        <code class="code">`color: #FFCD70`</code> aplica a cor no texto
      </span>
      <span class="property-variant">
        <code class="code">bg-brand-primary-pure</code> => renderiza
        <code class="code">`background-color: #FFCD70`</code> aplica a cor ao
        background
      </span>

      <span class="property-variant">
        <code class="code">border-brand-primary-pure</code> => renderiza
        <code class="code">`border-color: #FFCD70`</code> aplica a cor nas bordas
      </span>

      <span class="property-variant">
        <code class="code">shadow-brand-primary-pure</code> => renderiza
        <code class="code">`shadow-color: #FFCD70`</code> aplica a cor na sombra
      </span>
      <span class="property-variant">
        <code class="code">fill-brand-primary-pure</code> => renderiza
        <code class="code">`fill: #FFCD70`</code> aplica a cor ao svg
      </span>

      <span class="property-variant">
        <code class="code">stroke-brand-primary-pure</code> => renderiza
        <code class="code">`stroke: #FFCD70`</code> aplica a cor ao stroke do svg
      </span>
    </p>

    <dl
      v-for="(value, categoryColor) in colors"
      :key="categoryColor"
      class="list-colors-category"
    >
      <dt class="category story-subtitle">
        {{ categoryColor }}
      </dt>

      <ul class="list-colors-group">
        <template v-if="hasSubGroup(value)">
          <li
            v-for="(colorsByColorGroup, keyColorGroup) in value"
            :key="keyColorGroup"
            class="item-color-group"
          >
            <strong class="name fonts-heading-h3 capitalize">{{
              keyColorGroup
            }}</strong>

            <div class="list-colors-variants">
              <CardColor
                v-for="(colorHex, colorName) in colorsByColorGroup"
                :key="colorName"
                :category="categoryColor"
                :group="keyColorGroup"
                :variant="colorName"
                :hex="colorHex"
              />
            </div>
          </li>
        </template>

        <template v-else>
          <div class="list-colors-variants">
            <CardColor
              v-for="(colorHex, colorName) in value"
              :key="colorName"
              :category="categoryColor"
              :group="colorName"
              :hex="colorHex"
            />
          </div>
        </template>
      </ul>
    </dl>
  </div>
</template>

<style lang="scss">
.list-colors-category {
  @apply flex  flex-col
    ml-4 mb-4;
  > .category {
    @apply capitalize;
  }

  > .list-colors-group {
    @apply mb-4;

    > .item-color-group {
      @apply mb-5;

      > .name {
        @apply inline-block mb-4;
      }
    }
  }

  > .list-colors-group .list-colors-variants {
    @apply grid grid-col-1 md:site:grid-cols-4 gap-4 place-items-center
      mb-4;
  }

  > .prevent-compiler-bug {
    @apply bg-brand-primary-pure
  bg-brand-primary-light
  bg-brand-primary-medium
  bg-brand-primary-dark
  bg-brand-secondary-medium
  bg-brand-secondary-light
  bg-brand-secondary-pure
  bg-brand-secondary-dark
  bg-highlight-pure
  bg-highlight-light
  bg-highlight-medium
  bg-highlight-dark
  bg-neutral-low-pure
  bg-neutral-low-light
  bg-neutral-low-medium
  bg-neutral-low-dark
  bg-neutral-high-pure
  bg-neutral-high-light
  bg-neutral-high-medium
  bg-neutral-high-dark
  bg-feedback-positive-pure
  bg-feedback-positive-light
  bg-feedback-positive-medium
  bg-feedback-positive-dark
  bg-feedback-warning-pure
  bg-feedback-warning-light
  bg-feedback-warning-medium
  bg-feedback-warning-dark
  bg-feedback-informative-pure
  bg-feedback-informative-light
  bg-feedback-informative-medium
  bg-feedback-informative-dark
  bg-feedback-negative-pure
  bg-feedback-negative-light
  bg-feedback-negative-medium
  bg-feedback-negative-dark
  bg-feedback-negative-dark;
  }
}
</style>
