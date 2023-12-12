<template>
  <VLink :type="props.type" :disabled="disabled || loading" :class="buttonUI">
    <slot>
      <span v-if="label" :class="[truncate ? ui.truncate : '']"> {{ label }}</span>
    </slot>
  </VLink>
</template>

<script lang="ts" setup>
import VLink from '../link/Link.vue'
import { computed } from 'vue'
import type { PropType } from 'vue'
import { twMerge, twJoin } from 'tailwind-merge'
import ui from './button.css'

defineOptions({
  inheritAttrs: false
})
const props = defineProps({
  type: {
    type: String,
    default: 'button'
  },
  length: {
    type: String as PropType<keyof typeof ui.length>,
    default: () => ui.default.length
  },
  label: {
    type: String,
    default: null
  },
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  padding: {
    type: String as PropType<keyof typeof ui.padding>,
    default: () => ui.default.padding
  },
  rounded: {
    type: String as PropType<keyof typeof ui.rounded>,
    default: () => ui.default.rounded
  },
  size: {
    type: String as PropType<keyof typeof ui.size>,
    default: () => ui.default.size
  },
  variant: {
    type: String as PropType<keyof typeof ui.variant>,
    default: () => ui.default.variant
  },
  truncate: {
    type: Boolean,
    default: false
  },
  class: {
    type: String,
    default: ui.base
  }
})
const buttonUI = computed(() => {
  return twMerge(twJoin(
    ui.base,
    ui.font,
    ui.rounded[props.rounded][props.size],
    ui.padding[props.padding][props.size],
    ui.variant[props.variant],
    ui.text[props.size],
    ui.length[props.length]
  ), props.class)
})
</script>
