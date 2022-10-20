<script lang="ts" setup>

defineProps<{
  category: string
  group: string
  variant: string
  hex: string
}>()


function bgColor(colorCategory: string, colorGroup: string, colorVariant?: string) {
  return colorVariant
    ? `bg-${colorCategory}-${colorGroup}-${colorVariant}`
    : `bg-${colorCategory}-${colorGroup}`
}

function clipboard(color) {
  navigator.clipboard.writeText(color);
}
</script>

<template>
  <aside class="card-color">
    <div class="color" :class="bgColor(category, group, variant)" @click="clipboard(bgColor(category, group, variant))"/>

    <div class="color-info">
      <strong class="name">{{ variant || group }}</strong>
      <strong class="hex">{{ hex }}</strong>
      <code class="code">{{ bgColor(category, group, variant) }}</code>
    </div>
  </aside>
</template>

<style lang="scss">
.card-color {
  @apply flex flex-col
    h-60 mb-0 
    shadow-weak;

  width: clamp(210px, 100%, 22vw);
  flex-basis: 210px;
  

  > .color {
    @apply flex justify-center items-center;
    @apply h-full w-full cursor-pointer;

    &:hover::before {
      content: 'Clique para copiar o token de cor';
      display: inline-block;
      width: 100%;
      @apply mx-xs;
      @apply text-xs text-neutral-high-pure text-stroke-neutral-low-pure text-shadow-xl;
    }
  }

  > .color-info {
    @apply flex flex-col
      h-24 px-2 py-2;

    > .name {
      @apply text-xs
    }
    > .hex {
      @apply uppercase text-micro;
    }
    > .code {
      @apply fonts-body-medium-regular;
      font-family: 'Firacode';
      text-decoration: underline;
      text-underline-position: under;
      text-decoration-thickness: 3px;
      text-decoration-color: #8250DF;
    }
  }
}
</style>
