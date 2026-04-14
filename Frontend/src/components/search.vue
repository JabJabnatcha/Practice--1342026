<script setup lang="ts">
import { ref } from "vue";
// import SearchIcon from "./icons/SearchIcon.vue";

const keyword = ref("");

const emit = defineEmits<{
  (e: "search", keyword: string): void;
}>();

const handleSearch = () => {
  emit("search", keyword.value.trim());
};
</script>

<template>
  <div class="flex gap-2 mt-6">

    <!-- Input with icon -->
    <div class="relative flex-1">
      <SearchIcon class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

      <input
        v-model="keyword"
        type="text"
        placeholder="Search..."
        class="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
        @keyup.enter="handleSearch"
      />
    </div>

    <!-- Button -->
    <button
      @click="handleSearch"
      class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center gap-2"
    >
      <SearchIcon class="w-5 h-5" />
      Search
    </button>

  </div>
</template>