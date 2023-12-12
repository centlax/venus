<template>
  <form :class="props.class">
    <slot />
  </form>
</template>

<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
    default: 'ven-form'
  }
})
</script>
