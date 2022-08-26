<template>
  <h1>{{ $route.path }}</h1>
</template>

<script setup>
onMounted(() => {
  console.log('onMounted:chart');
});
</script>
