<template>
  <component v-bind:is="'div'" class="relative">
    <span>
      <slot name="leading"> <UIcon /> </slot>
    </span>
    <input v-bind="$attrs" :class="inputUI" v-model="model" />
    <span>
      <slot name="trailing"> <UIcon /> </slot>
    </span>
  </component>
</template>

<script setup lang="ts">
import { UIcon } from '../../../components'
import css from './styles'
import { twMerge, twJoin } from 'tailwind-merge'
import { computed } from 'vue'
import type { InputProps } from './types'

const model = defineModel() // two way binding

defineOptions({
  name: 'UInput',
  inheritAttrs: false
})


const props = withDefaults(defineProps<InputProps>(), {
  size: 'md', transform: 'none'
})


const inputUI = computed(() => {
  return twMerge(twJoin(
    css.base, css.rounded[props.size], css.placeholder,
    css.text[props.size], css.transform[props.transform],
    css.gap[props.size], css.padding[props.size], 
    css.leading[props.size], css.trailing[props.size]
  ), props.class )
})
</script>
