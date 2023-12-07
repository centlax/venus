<template>
  <Icon v-if="dynamic" :name="name" />
  <span v-else :class="name" />
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useAppConfig } from '#imports'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  dynamic: {
    type: Boolean,
    default: true
  }
})

const appConfig = useAppConfig()
// @ts-ignore
const dynamic = computed(() => props.dynamic || appConfig.ui?.icons?.dynamic)

</script>
