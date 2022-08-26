<template>
  <h1>{{ $route.path }}</h1>
</template>

<script setup>
const route = useRoute();
onMounted(() => {
  console.log(route.fullPath);
});
</script>
