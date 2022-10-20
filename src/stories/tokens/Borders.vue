<script lang="ts" setup>
import borders from '@themes/pescarte/borders'
import Box from './Box.vue'

import { computed } from 'vue'

const bordersAxis = ['t', 'r', 'b', 'l', 'x', 'y', 'a']
const borderExample = computed(() => borders.borderWidth && { name: 'md', value: borders.borderWidth.md })
</script>

<template>
  <div>
    <h2 class="story-title">
      Bordas
    </h2>

    <h3 class="story-subtitle">
      Border-radius
    </h3>

    <div class="grid grid-cols-4 gap-4 mb-6">
      <Box
        v-for="(value, name) in borders.borderRadius"
        :key="name"
        :class="`rounded-${name}`"
        :name="name"
        :value="value"
        :code="`rounded-${name}`"
      />
    </div>

    <h3 class="story-subtitle">
      Border-width
    </h3>

    <p>Devemos explicitar em qual eixo a borda deve ser renderizada no seguinte exemplo</p>
    <strong>border-[eixo]-[tamanho]</strong>

    <p class="properties-information">
      <span class="property-variant">
        <code class="code">border-t-sm</code> => renderiza
        <code class="code">`border-top-width`</code> borda no topo
      </span>
      <span class="property-variant">
        <code class="code">border-r-sm</code> => renderiza
        <code class="code">`border-right-width`</code> borda a direita
      </span>
      <span class="property-variant">
        <code class="code">border-b-sm</code> => renderiza
        <code class="code">`border-bottom-width`</code> borda abaixo
      </span>
      <span class="property-variant">
        <code class="code">border-l-sm</code> => renderiza
        <code class="code">`border-left-width`</code> borda a esquerda
      </span>

      <span class="property-variant">
        <code class="code">border-x-sm</code> => renderiza
        <code class="code">`border-left-width & border-right-width`</code> borda no eixo X, a esquerda e direita
      </span>
      <span class="property-variant">
        <code class="code">border-y-sm</code> => renderiza
        <code class="code">`border-top-width & border-bottom-width`</code> borda no eixo Y, a cima e abaixo
      </span>

      <span class="property-variant">
        <code class="code">border-a-sm</code> => renderiza
        <code class="code">`border-width`</code> borda uma borda em todos os eixos
      </span>
    </p>

    <h4 class="story-internal-title">
      Tamanhos
    </h4>
    <div class="grid grid-cols-3 gap-4 place-items-center mb-6">
      <Box
        v-for="(value, name) in borders.borderWidth"
        :key="name"
        :class="`border-a-${name}`"
        :name="name"
        :value="value"
        :code="`border-a-${name}`"
      />
    </div>

    <h4 class="story-internal-title">
      Eixos
    </h4>

    <div class="grid grid-cols-3 gap-4 place-items-center">
      <Box
        v-for="axy in bordersAxis"
        :key="axy"
        :class="`border-${axy}-${borderExample.name}`"
        :name="borderExample.name"
        :value="borderExample.value"
        :code="`border-${axy}-${borderExample.name}`"
      />
    </div>
  </div>
</template>

<style lang="scss">
.prevent-compiler-bug {
  @apply rounded-none rounded-sm rounded-md
      rounded-half rounded-lg rounded-full rounded-fully
      border-a-xs border-a-sm
      border-a-md border-a-lg border-a-lg
      border-t-md border-r-md border-b-md
      border-l-md border-y-md border-x-md
      border-x-md;
}
</style>
