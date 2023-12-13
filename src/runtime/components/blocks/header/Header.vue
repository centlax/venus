<template>
  <header :class="ui.wrapper" aria-label="Global">
    <div class="flex lg:flex-1">
      <a href="#" class="-m-1.5 p-1.5">
        <span class="sr-only">Centlax</span>
        <VLogo size="md" />
      </a>
    </div>

    <div class="flex md:hidden">
      <button
        type="button"
        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        @click="mobileMenuOpen = true"
      >
        <span class="sr-only">Open main menu</span>
        <VIcon class="h-6 w-6 text-gray-900 dark:text-white" aria-hidden="true" name="fluent:navigation-24-regular" />
      </button>
    </div>

    <div class="hidden lg:flex lg:gap-x-12 text-gray-900 dark:text-white">
      <a
        v-for="item in navigation"
        :key="item.name"
        :href="item.href"
        class="text-sm font-semibold leading-6"
      >{{ item.name }}</a>
    </div>

    <div class="hidden lg:flex lg:flex-1 lg:justify-end">
      <a href="#" class="text-sm font-semibold leading-6 text-inherit">Log in <span
        aria-hidden="true"
      >&rarr;</span></a>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ui from './header.css'
import VLogo from '../../misc/logo/Logo.vue'
import VIcon from '../../elements/icon/Icon.vue'
const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' }
]
const mobileMenuOpen = ref(false)
</script>
