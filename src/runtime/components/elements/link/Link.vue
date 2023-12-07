<template>
  <NuxtLink
    class="text-brand-600 dark:text-brand-300 hover:underline"
    v-bind="$attrs"
    :class="linkUI"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { NuxtLink } from '#components'
</script>
