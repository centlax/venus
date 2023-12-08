<template>
  <NuxtLink :type="props.type" :class="buttonUI">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { NuxtLink } from '#components'
import type { PropType } from 'vue'
import { twMerge, twJoin } from 'tailwind-merge'
import { computed } from 'vue'
import ui from './button.css'


const props = defineProps({
  type: {
    type: String,
    default: 'button'
  },
  block: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    default: null
  },
  size: {
    type: String as PropType<keyof typeof ui.size>,
    default: ui.default.size
  },
  class: {
    type: [String, Object, Array] as PropType<any>,
    default: () => ''
  },
  variant: {
    type: String as PropType<keyof typeof ui.variant>,
    default: ui.default.variant
  }
})

const buttonUI = computed(() => {
  return twMerge(twJoin(
    ui.variant[props.variant], ui.padding[props.size]
  ), props.class)
})
</script>
