<script lang="ts" setup>
import typos from '@themes/pescarte/typography'


function remToPx(rem: string) {
  return parseFloat(rem) * 16
}
</script>

<template>
  <div>
    <h2 class="story-title">
      Tipografia
    </h2>

    <h3 class="story-subtitle">
      Font-family
    </h3>

    <table class="table-typos">
      <thead class="table-head">
        <th class="title">
          Nome
        </th>
        <th class="title">
          Valor
        </th>
        <th class="title">
          Uso
        </th>
      </thead>

      <tbody class="table-body">
        <tr v-for="(value, name) in typos.fontFamily" :key="name" class="row">
          <td class="cell">
            {{ name }}
          </td>
          <td class="cell">
            {{ value[0] }}
          </td>
          <td class="cell">
            <code :class="`font-${name}`">font-{{ name }}</code>
          </td>
        </tr>
      </tbody>
    </table>

    <h3 class="story-subtitle">
      Font-weight
    </h3>

    <table class="table-typos">
      <thead class="table-head">
        <th class="title">
          Nome
        </th>
        <th class="title">
          Valor
        </th>
        <th class="title">
          Uso
        </th>
      </thead>

      <tbody class="table-body">
        <tr v-for="(value, name) in typos.fontWeight" :key="name" class="row">
          <td class="cell">
            {{ name }}
          </td>
          <td class="cell">
            {{ value }}
          </td>
          <td class="cell">
            <code :class="`font-${name}`">font-{{ name }}</code>
          </td>
        </tr>
      </tbody>
    </table>

    <h3 class="story-subtitle">
      Letter-spacing
    </h3>

    <table class="table-typos">
      <thead class="table-head">
        <th class="title">
          Nome
        </th>
        <th class="title">
          Valor
        </th>
        <th class="title">
          Uso
        </th>
      </thead>

      <tbody class="table-body">
        <tr v-for="(value, name) in typos.letterSpacing" :key="name" class="row">
          <td class="cell">
            {{ name }}
          </td>
          <td class="cell">
            {{ value }}
          </td>
          <td class="cell">
            <code :class="`tracking-${name}`">tracking-{{ name }}</code>
          </td>
        </tr>
      </tbody>
    </table>

    <h3 class="story-subtitle">
      Line-height
    </h3>

    <table class="table-typos">
      <thead class="table-head">
        <th class="title">
          Nome
        </th>
        <th class="title">
          Valor
        </th>
        <th class="title">
          Uso
        </th>
      </thead>

      <tbody class="table-body">
        <tr v-for="(value, name) in typos.lineHeight" :key="name" class="row">
          <td class="cell">
            {{ name }}
          </td>
          <td class="cell">
            {{ value }}
          </td>
          <td class="cell">
            <code :class="`leading-${name}`">leading-{{ name }}</code>
          </td>
        </tr>
      </tbody>
    </table>

    <h3 class="story-subtitle">
      Font-size
    </h3>

    <table class="table-typos">
      <thead class="table-head">
        <th class="title">
          Nome
        </th>
        <th class="title">
          Valor
        </th>
        <th class="title">
          Uso
        </th>
      </thead>

      <tbody class="table-body">
        <tr v-for="(value, name) in typos.fontSize" :key="name" class="row">
          <td class="cell">
            {{ name }}
          </td>
          <td class="cell">
            {{ value }}
            <small>(~ {{ remToPx(value) }}px)</small>
          </td>
          <td class="cell">
            <code :class="`text-${name}`">text-{{ name }}</code>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss">
.table-typos {
  @apply w-full mb-6;

  > .table-head {
    @apply bg-neutral-high-pure
      text-left text-3xs;

    > .title {
      @apply px-1 py-1;
    }
  }

  > .table-body {
    @apply;

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
    @apply text-micro text-3xs
      text-2xs text-xs text-sm
      text-md text-lg text-xl text-2xl
      text-3xl text-mega text-giga text-giga
      tracking-md tracking-default tracking-sm
      leading-default leading-xs leading-sm
      leading-md leading-lg leading-xl leading-2xl;
  }
}
</style>
