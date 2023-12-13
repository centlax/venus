<template>
  <div :class="containerUI">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import { twMerge, twJoin } from 'tailwind-merge'
import ui from './container.css'

defineOptions({
  inheritAttrs: false
})

const props = defineProps({
  padding: {
    type: String as PropType<keyof typeof ui.padding>,
    default: ui.default.padding
  },
  class: {
    type: String,
    default: ''
  }
})

const containerUI = computed(() => {
  return twMerge(twJoin(
    ui.base,
    ui.color,
    ui.padding[props.padding]
  ), props.class)
})
</script>
