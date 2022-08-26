<template>
  <h1>{{ $route.path }}</h1>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  console.log('onMounted:list');
});
</script>
