<template>
  <div :class="ui.wrapper">
    <input>
    <slot />

    <span>
      <slot name="leading">
        <VIcon name="" />
      </slot>
    </span>

    <span>
      <slot name="trailing">
        <VIcon name="" />
      </slot>
    </span>
  </div>
</template>

<script setup lang="ts">
import ui from './input.css'
import VIcon from '../../elements/icon/Icon.vue'
</script>
