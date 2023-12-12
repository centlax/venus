<template>
  <div :class="ui.wrapper">
    <input
      :id="inputID"
      :class="inputUI"
      v-bind="props"
      :value="props.modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    >
    <slot />

    <span v-if="(leadingIcon || $slots.leading)" :class="leadingWrapperIconUI">
      <slot name="leading" :disabled="disabled" :loading="loading">
        <VIcon :name="props.leadingIcon" :class="leadingIconUI" />
      </slot>
    </span>

    <span v-if="(trailingIcon || $slots.trailing)" :class="trailingWrapperIconUI">
      <slot name="trailing" :disabled="disabled">
        <VIcon :name="props.trailingIcon" :class="trailingIconUI" />
      </slot>
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, useSlots } from 'vue'
import type { PropType } from 'vue'
import { twMerge, twJoin } from 'tailwind-merge'
import VIcon from '../../elements/icon/Icon.vue'
import ui from './input.css'

defineOptions({
  components: {
    VIcon
  },
  inheritAttrs: false
})
defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  name: {
    type: String,
    default: null
  },
  placeholder: {
    type: String,
    default: null
  },
  required: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  autofocus: {
    type: Boolean,
    default: false
  },
  leadingIcon: {
    type: String,
    default: null
  },
  trailingIcon: {
    type: String,
    default: null
  },
  loading: {
    type: Boolean,
    default: false
  },
  padding: {
    type: String as PropType<keyof typeof ui.padding>,
    default: () => ui.default.padding
  },
  size: {
    type: String as PropType<keyof typeof ui.size>,
    default: () => ui.default.size
  },
  variant: {
    type: String as PropType<keyof typeof ui.variant>,
    default: () => ui.default.variant
  },
  class: {
    type: String,
    default: null
  }
})

const input = ref<HTMLInputElement | null>(null)
const slots = useSlots()

const inputUI = computed(() => {
  if (props.autofocus) {
    input.value?.focus()
  }
  return twMerge(twJoin(
    ui.base,
    ui.form,
    ui.font,
    ui.rounded,
    ui.placeholder,
    ui.text[props.size],
    ui.size[props.size],
    ui.variant[props.variant],
    ui.padding[props.padding][props.size],
    ( slots.leading || props.leadingIcon ) && ui.leading.padding[props.size],
    ( slots.trailing || props.trailingIcon ) && ui.trailing.padding[props.size]
  ), props.class)
})

const inputID = computed(() => {
  return `id_${props.name}`
})


const leadingWrapperIconUI = computed(() => {
  return twJoin(
    ui.icon.leading.wrapper,
    ui.icon.leading.pointer,
    ui.icon.leading.padding[props.size]
  )
})

const trailingWrapperIconUI = computed(() => {
  return twJoin(
    ui.icon.trailing.wrapper,
    ui.icon.trailing.pointer,
    ui.icon.trailing.padding[props.size]
  )
})

const leadingIconUI = computed(() => {
  return twJoin(
    ui.icon.base,
    ui.icon.size[props.size],
    props.loading && ui.icon.loading
  )
})

const trailingIconUI = computed(() => {
  return twJoin(
    ui.icon.base,
    ui.icon.size[props.size],
    props.loading && ui.icon.loading
  )
})
</script>
