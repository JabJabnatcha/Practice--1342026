<script setup lang="ts">
import logo from '../assets/Logo.png'
</script>

<template>
  <nav class="flex items-center h-16 px-6 bg-white">

    <!-- Left (Logo) -->
    <router-link to="/" class="flex-1">
      <img :src="logo" alt="Logo" class="w-10 h-10" />
    </router-link>

    <!-- Center (Menu) -->
    <div class="flex-1 flex justify-center gap-6 font-bold">
      <router-link to="/" class="hover:text-gray-700">Home</router-link>
      <span class="hover:text-gray-700 cursor-pointer">For Kids</span>
      <span class="hover:text-gray-700 cursor-pointer">Categories</span>
    </div>

    <!-- Right (Actions) -->
    <div class="flex-1 flex justify-end gap-4">
      <button class="hover:text-gray-700">Cart</button>
      <button class="hover:text-gray-700 font-bold">Login</button>
    </div>

  </nav>
</template>