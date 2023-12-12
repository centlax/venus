<template>
  <component
    :is="$attrs.onSubmit ? 'form' : as"
    :class="cardUI"
    v-bind="$attrs"
  >
    <div v-if="$slots.header" :class="[ui.header.base, ui.header.padding, ui.header.background]">
      <slot name="header" />
    </div>
    <div :class="[ui.body.base, ui.body.padding, ui.body.background]">
      <slot />
    </div>
    <div v-if="$slots.footer" :class="[ui.footer.base, ui.footer.padding, ui.footer.background]">
      <slot name="footer" />
    </div>
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { PropType } from 'vue'
import { twMerge, twJoin } from 'tailwind-merge'
import ui from './card.css'

defineOptions({
  inheritAttrs: false
})

const props = defineProps({
  as: {
    type: String,
    default: 'div'
  },
  height: {
    type: String,
    default: ''
  },
  class: {
    type: [String, Object, Array] as PropType<any>,
    default: () => ''
  }
})


const cardUI = computed(() => {
  return twMerge(twJoin(
    ui.base,
    ui.rounded,
    ui.divide,
    ui.ring,
    ui.shadow,
    ui.background
  ), props.class)
})


</script>
