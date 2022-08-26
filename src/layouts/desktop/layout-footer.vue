<template>
  <div class="flex justify-center items-center w-full h-full">{{ appStore.copyright }}</div>
</template>

<script setup>
import { useAppStore } from '~/store';

const appStore = useAppStore();
</script>
