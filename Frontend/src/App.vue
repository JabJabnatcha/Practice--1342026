<script setup lang="ts">
</script>

<template>
  <nav class="flex gap-4 p-4 bg-gray-800 text-white">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>

  <router-view />
</template>