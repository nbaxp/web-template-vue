<template>
  <component :is="svg" />
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const components = import.meta.glob('../assets/icons/**/*.svg');
const props = defineProps({
  name: {
    type: String,
    default: 'default',
  },
});

const svg = computed(() =>
  defineAsyncComponent(components[`../assets/icons/${props.name}.svg`] ?? components['../assets/icons/default.svg']),
);
</script>
