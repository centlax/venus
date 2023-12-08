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
import ui from './container.css'
import config from '../../../ui.config'

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
  },
  backColor: {
    type: String as PropType<keyof typeof config.background>,
    default: 'auto'
  }
})

const outerUI = computed(() => {
  return twMerge(twJoin(
    ui.wrapper,
    config.background[props.backColor]
  ), props.class)
})

const innerUI = computed(() => {
  return twJoin(
    ui.base, ui.padding,
    ui.padding[props.padding]
  )
})

</script>
