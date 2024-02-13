<template>
  <component v-if="!props.to" :is="props.as">
    <slot />
  </component>
  <template v-else>
    <a v-bind="$attrs">
      <slot />
    </a>
  </template>
</template>

<script setup lang="ts">
defineOptions({
  name: 'ULink',
  inheritAttrs: false
})

interface LinkProps {
  to?: string
  as?: string
}
const props = withDefaults(defineProps<LinkProps>(), {})
</script>
