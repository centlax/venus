<template>
  <button class="bg-pink-800 relative">
    <NuxtLink :to="props.to" class="bg-red-600 absolute top-0">
      <slot />
    </NuxtLink>
  </button>
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { NuxtLink } from '#components'

const props = defineProps({
  to: {
    type: String,
    default: null
  }
})
</script>
