<template>
  <NuxtLink :type="props.type" :disabled="disabled || loading" :class="buttonUI">
    <slot name="leading" :disabled="props.disabled" :loading="props.loading">
      <VIcon v-if="props.leadingIcon" :name="leadingIcon" :class="leadingUI" aria-hidden="true" />
    </slot>
    <slot>
      <span v-if="label" :class="[truncate ? ui.truncate : '']"> {{ label }}</span>
    </slot>
    <slot name="trailing" :disabled="props.disabled" :loading="props.loading">
      <VIcon v-if="props.trailingIcon" :name="trailingIcon" :class="trailingUI" aria-hidden="true" />
    </slot>
  </NuxtLink>
</template>

<script lang="ts" setup>
import VLink from '../link/Link.vue'
import { computed, useSlots } from 'vue'
import type { PropType } from 'vue'
import { twMerge, twJoin } from 'tailwind-merge'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { NuxtLink } from '#components'
import VIcon from '../../elements/icon/Icon.vue'
import ui from './button.css'

defineOptions({
  components: {
    VLink,
    VIcon
  }
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
  leadingIcon: {
    type: String,
    default: null
  },
  trailingIcon: {
    type: String,
    default: null
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
const slots = useSlots()
const leadingUI = computed(() => {
  return twJoin(
    ui.icon.base,
    ui.icon.size[props.size],
    (props.label || slots.default) && ui.icon.leading.margin[props.size],
    props.loading && ui.icon.loading
  )
})

const trailingUI = computed(() => {
  return twJoin(
    ui.icon.base,
    ui.icon.size[props.size],
    (props.label || slots.default) && ui.icon.trailing.margin[props.size],
    props.loading && ui.icon.loading
  )
})

const buttonUI = computed(() => {
  return twMerge(twJoin(
    ui.base,
    ui.font,
    ui.rounded[props.rounded][props.size],
    ui.padding[props.padding][props.size],
    ui.variant[props.variant],
    ui.colors[props.variant],
    ui.text[props.size],
    ui.length[props.length]
  ), props.class)
})
</script>
