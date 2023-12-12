<template>
  <VContainer class="h-screen">
    <div class="flex justify-center items-center h-screen gap-10">
      <VInput v-model="value" placeholder="you@example.com" />
      {{ value }}
    </div>
  </VContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref('Centlax')

</script>
