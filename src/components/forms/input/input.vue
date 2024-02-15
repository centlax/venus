<template>
  <component v-bind:is="'div'" class="relative">
    <span>
      <slot name="leading"> <UIcon /> </slot>
    </span>
    <input :class="inputUI" v-bind="$attrs" v-model="model" />
    <span>
      <slot name="trailing"> <UIcon /> </slot>
    </span>
  </component>
</template>

<script setup lang="ts">
import { UIcon } from '../../../components'
import ui from './input.css'
import { twMerge, twJoin } from 'tailwind-merge'
import { computed, type InputHTMLAttributes } from 'vue'

const model = defineModel() // two way binding

defineOptions({
  name: 'UInput',
  inheritAttrs: false
})

interface InputProps extends /* @vue-ignore */ InputHTMLAttributes {
  size?: Extract<keyof typeof ui.size, string>
  transform?: Extract<keyof typeof ui.transform, string>
}

const props = withDefaults(defineProps<InputProps>(), {
  size: 'md', transform: 'none'
})


const inputUI = computed(() => {
  return twMerge(twJoin(
    ui.base, ui.rounded[props.size], ui.transform[props.transform],
    
  ), props.class )
})
</script>
