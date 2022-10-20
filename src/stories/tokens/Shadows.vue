<script lang="ts" setup>
import effects from '@themes/pescarte/effects'

import Box from './Box.vue'

</script>

<template>
  <div>
    <h2 class="story-title">
      Sombras
    </h2>

    <div class="flex justify-between">
      <Box
        v-for="(value, name) in effects.boxShadow"
        :key="name"
        :class="`shadow-${name}`"
        :name="name"
        :value="value"
        :code="`shadow-${name}`"
      />
    </div>
  </div>
</template>

<style lang="scss">
.prevent-compiler-bug {
  @apply shadow-weak shadow-moderate shadow-intense shadow-strong;
}
</style>
