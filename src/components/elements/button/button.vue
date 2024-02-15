<template>
  <button v-bind="$props" :class="buttonUI">
    <slot name="leading">
      <UIcon v-if="props.leadingIcon" :name="props.leadingIcon" />
    </slot>
    <slot>
      <span v-if="props.label" :class="[props.truncate ? ui.truncate : undefined]">
        {{ props.label }}
      </span>
    </slot>
    <slot name="trailing">
      <UIcon v-if="props.trailingIcon" :name="props.trailingIcon" />
    </slot>
  </button>
</template>

<script setup lang="ts">
import { type ButtonHTMLAttributes, useSlots, computed } from 'vue'
import { twMerge, twJoin } from 'tailwind-merge'
import { isWhiteGray } from '../../../utils'
import { UIcon } from '../icon'
import ui from './button.css'

interface ButtonProps extends /* @vue-ignore */ ButtonHTMLAttributes {
  leadingIcon?: string
  trailingIcon?: string
  label?: string
  truncate?: boolean
  color?: Extract<keyof typeof ui.color, string>
  size?: Extract<keyof typeof ui.size, string>
  variant?: Extract<keyof typeof ui.variant, string>
  padded?: boolean
  square?: boolean
  block?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
  leadingIcon: undefined,
  trailingIcon: undefined,
  label: undefined,
  color: 'primary',
  size: 'md',
  variant: 'solid',
  padded: true,
  square: false
})

const slots = useSlots()
const isSquare = computed(() => props.square || (!slots.default && !props.label))
const buttonUI = computed(() => {
  return twMerge(
    twJoin(
      ui.base,
      ui.font,
      ui.rounded[props.size],
      ui.text[props.size],
      ui.gap[props.size],
      props.padded && ui[isSquare.value ? 'square' : 'padding'][props.size],
      isWhiteGray(props.color) && ui.color[props.color],
      !isWhiteGray(props.color) && ui.variant[props.variant].replaceAll('{color}', props.color),
      props.block ? ui.block : ui.inline
    ),
    props.class
  )
})
</script>
