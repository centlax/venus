<template>
  <VContainer class="h-screen">
    <div class="flex justify-center items-center h-screen gap-10">
      <VButton :label="label" size="xs" />
      <VButton :label="label" size="sm" />
      <VButton :label="label" size="md" />
      <VButton :label="label" size="lg" />
      <VButton :label="label" size="xl" />
    </div>
  </VContainer>
</template>

<script setup lang="ts">
const label = 'Button text'
</script>
