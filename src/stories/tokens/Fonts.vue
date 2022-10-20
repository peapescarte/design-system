<script lang="ts" setup>
const fonts = {
  display: [
    'fonts-display-large',
    'fonts-display-medium',
    'fonts-display-small',
  ],

  heading: [
    'fonts-heading-h1',
    'fonts-heading-h2',
    'fonts-heading-h3',
    'fonts-heading-h4',
  ],

  subtitle: ['fonts-subtitle-medium', 'fonts-subtitle-small'],

  body: [
    'fonts-body-x-large-regular',
    'fonts-body-x-large-bold',
    'fonts-body-large-regular',
    'fonts-body-large-bold',
    'fonts-body-medium-regular',
    'fonts-body-medium-bold',
    'fonts-body-small-regular',
    'fonts-body-small-bold',
  ],

  link: [
    'fonts-link-inline-large',
    'fonts-link-inline-medium',
    'fonts-link-inline-small',
  ],

  overline: ['fonts-overline-small'],
}

function remToPx(rem: string) {
  return parseFloat(rem) * 16
}
</script>

<template>
  <div>
    <h2 class="story-title">Fonts</h2>

    <div class="font-container" v-for="(value, name) in fonts" :key="name">
      <h3 class="story-subtitle">{{ name }}</h3>

      <table class="table-typos">
        <thead class="table-head">
          <th class="title">Valor</th>
          <th class="title">Uso</th>
        </thead>

        <tbody class="table-body">
          <tr v-for="(font, index) in value" :key="index" class="row">
            <td class="cell">
              {{ font }}
            </td>

            <td class="cell">
              <code :class="font">{{ name }}</code>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss">
.font-container {
  @apply ml-3xs;
}

.table-typos {
  @apply w-full mb-6 ml-micro;
  

  > .table-head {
    @apply bg-neutral-high-pure
      text-left text-3xs;

    > .title {
      @apply px-1 py-1;
    }
  }

  > .table-body {
    @apply ml-2xs;

    > .row > .cell {
      @apply px-1 py-1;
      border-bottom: 1px solid #e0e0e0;

      &:not(:last-of-type) {
        @apply w-2/10;
        border-right: 1px solid #e0e0e0;
      }
    }
  }

  > .prevent-compiler-bug {
    @apply fonts-display-large;
    @apply fonts-display-medium;
    @apply fonts-display-small;
    @apply fonts-heading-h1;
    @apply fonts-heading-h2;
    @apply fonts-heading-h3;
    @apply fonts-heading-h4;
    @apply fonts-subtitle-medium;
    @apply fonts-subtitle-small;
    @apply fonts-body-x-large-regular;
    @apply fonts-body-x-large-bold;
    @apply fonts-body-large-regular;
    @apply fonts-body-large-bold;
    @apply fonts-body-medium-regular;
    @apply fonts-body-medium-bold;
    @apply fonts-body-small-regular;
    @apply fonts-body-small-bold;
    @apply fonts-link-inline-large;
    @apply fonts-link-inline-medium;
    @apply fonts-link-inline-small;
    @apply fonts-overline-small;
  }
}
</style>
