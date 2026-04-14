<script setup lang="ts">
import imageNotFound from '../assets/image-not-found.jpg'

// ✅ สร้าง type ชั่วคราว
type Product = {
  id: number
  productName: string
  productPrice: number
  image?: string
}

defineProps<{ product: Product }>()

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

const getImageUrl = (path?: string) => {
  if (!path || path === 'test.png') return imageNotFound
  return API_BASE_URL + path.replace(/\/{2,}/g, '/')
}

const handleError = (e: Event) => {
  const img = e.target as HTMLImageElement
  img.src = imageNotFound
}
</script>

<template>
  <router-link
    :to="`/item/${product.id}`"
    class="block bg-white hover:shadow-lg transition"
  >
    <img
      :src="getImageUrl(product.image)"
      class="w-full h-52 object-cover"
      @error="handleError"
    />

    <div class="p-4 flex justify-between items-center">
      <h3 class="text-gray-600 font-semibold">
        {{ product.productName }}
      </h3>

      <span class="font-bold">
        ${{ product.productPrice }}
      </span>
    </div>
  </router-link>
</template>