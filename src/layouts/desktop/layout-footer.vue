<template>
  <div class="flex justify-center items-center w-full h-full">{{ appStore.copyright }} v {{ version }}</div>
</template>

<script setup>
import { useAppStore } from '~/store';

import { version } from '../../../package.json';

const appStore = useAppStore();
</script>
