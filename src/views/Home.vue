<template>
  <div class="v-home">
    home
    <p>deviceType value: {{deviceType}}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useSiteStore } from '@/stores/site'

const siteStore = useSiteStore();

const deviceType = computed(() => siteStore.deviceType)

siteStore.setDeviceType();
</script>

<style lang="scss">

</style>