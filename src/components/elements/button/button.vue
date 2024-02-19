<template>
  <button v-bind="$props" :class="buttonUI">
    <slot name="leading">
      <UIcon v-if="props.leadingIcon" :name="props.leadingIcon" />
    </slot>
    <slot>
      <span v-if="props.label" :class="[props.truncate ? css.truncate : undefined]">
        {{ props.label }}
      </span>
    </slot>
    <slot name="trailing">
      <UIcon v-if="props.trailingIcon" :name="props.trailingIcon" />
    </slot>
  </button>
</template>

<script setup lang="ts">
import { useSlots, computed } from 'vue'
import { twMerge, twJoin } from 'tailwind-merge'
import { isWhiteGray } from '../../../utils'
import { UIcon } from '../icon'
import css from './styles'
import type { ButtonProps } from './types'


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
      css.base,
      css.rounded[props.size],
      css.text[props.size],
      css.gap[props.size],
      props.padded && css[isSquare.value ? 'square' : 'padding'][props.size],
      isWhiteGray(props.color) && css.color[props.color],
      !isWhiteGray(props.color) && css.variant[props.variant].replaceAll('{color}', props.color),
      props.block ? css.block : css.inline
    ),
    props.class
  )
})
</script>
