<script setup lang="ts">
import Topbar from '../components/topbar.vue'
import SearchBar from '../components/search.vue'
import ProductCard from '../components/ProductCard.vue'

// mock data (เอาไว้เทสก่อน)
const products = [
  {
    id: 1,
    productName: 'Product 1',
    productPrice: 100,
    image: '',
  },
  {
    id: 2,
    productName: 'Product 2',
    productPrice: 200,
    image: '',
  },
]

const handleSearch = (keyword: string) => {
  console.log('search:', keyword)
}
</script>

<template>
  <!-- Topbar -->
  <Topbar />

  <div class="p-6">

    <!-- Search -->
    <SearchBar @search="handleSearch" />

    <!-- Product Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
      <ProductCard
        v-for="item in products"
        :key="item.id"
        :product="item"
      />
    </div>

  </div>
</template>