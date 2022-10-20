<script lang="ts" setup>
defineProps<{
  name: string | number
  value: string | number
  code: string
}>()
</script>

<template>
  <div class="box-placeholder">
    <p class="box-infos">
      <strong class="info -title">{{ name }}</strong>

      <span class="info mb-4">{{ value }}</span>

      <span class="info">
        <code>{{ code }}</code>
      </span>
    </p>
  </div>
</template>

<style lang="scss">
.box-placeholder {
  @apply h-40 w-60
      p-4xs mx-nano
    bg-highlight-medium;

  > .box-infos {
    @apply flex flex-col;

    > .info {
      @apply flex flex-col;
      @apply fonts-body-medium-regular;
      @apply text-center;

      &.-title {
        @apply text-sm font-highlight;
      }
    }
  }
}
</style>
