<template>
  <h1>{{ $route.path }}</h1>
  <p
    v-for="item in 10"
    :key="item"
  >
    {{ item }}
  </p>
</template>
