<template>
  <div :class="outerUI">
    <div :class="innerUI">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import { twMerge, twJoin } from 'tailwind-merge'
import ui from './section'

defineOptions({
  inheritAttrs: false
})

const props = defineProps({
  size: {
    type: String as PropType<keyof typeof ui.size>,
    default: ui.default.size
  },
  class: {
    type: String,
    default: ''
  }
})

const outerUI = computed(() => {
  return twMerge(twJoin(
    ui.wrapper
  ), props.class)
})

const innerUI = computed(() => {
  return twJoin(
    ui.base, ui.padding, ui.size[props.size]
  )
})

</script>
