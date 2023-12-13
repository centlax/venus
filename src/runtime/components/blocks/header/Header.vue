<template>
  <header ref="el" :class="ui.wrapper" aria-label="Global">
    <div ref="left" class="flex lg:flex-1">
      <VLogo class="h-6 md:h-8 lg:h-10" size="md" />
    </div>
    <div ref="left" class="flex h-6 w-full" />

    <div class="flex gap-x-6 lg:gap-x-12 text-gray-900 dark:text-white text-sm font-semibold leading-6">
      <slot />
    </div>

    <div class="lg:flex lg:flex-1 lg:justify-end">
      <slot name="left" />
    </div>

    <div class="hidden">
      <button
        type="button"
        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        @click="mobileMenuOpen = true"
      >
        <span class="sr-only">Open main menu</span>
        <VIcon class="h-6 w-6 text-gray-900 dark:text-white" aria-hidden="true" name="fluent:navigation-24-regular" />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import ui from './header.css'
</script>
