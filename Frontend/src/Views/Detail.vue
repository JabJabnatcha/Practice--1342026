<script setup lang="ts">
import { ref, onMounted } from 'vue';
import TopBar from '../components/topbar.vue';
import { useRoute } from 'vue-router';
import { getProductById } from '../service/Productservice';
import type { Product } from '../service/Productservice';

const route = useRoute();

const product = ref<Product | null>(null);
const loading = ref(true);
const error = ref("");

const fetchData = async () => {
  try {
    loading.value = true;

    // ⚠️ route param เป็น string → ต้องแปลง
    const id = Number(route.params.id);

    product.value = await getProductById(id);
  } catch (err: any) {
    error.value = err.message || "Something went wrong";
  } finally {
    loading.value = false;
  }
};

const quantity = ref(1);

const increase = () => {
  if (product.value && quantity.value < product.value.stock) {
    quantity.value++;
  }
};

const decrease = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

onMounted(fetchData);
</script>

<template>
  <TopBar />
  <div class="min-h-screen p-6">

    <!-- Loading -->
    <div v-if="loading" class="flex justify-center py-20">
      <div class="animate-spin h-10 w-10 border-b-2 border-blue-500 rounded-full"></div>
    </div>

    <!-- Error -->
    <div v-else-if="error" class="text-center text-red-500">
      {{ error }}
    </div>

    <!-- Content -->
    <div v-else-if="product" class="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

      <!-- Image -->
      <img
        :src="product.image"
        class="w-full h-80 object-cover rounded-lg shadow"
      />

      <!-- Info -->
      <div class="flex flex-col gap-4">
        <h1 class="text-3xl font-bold">{{ product.productName }}</h1>

        <p class="text-xl text-blue-600 font-semibold">
          ${{ product.productPrice }}
        </p>

        <p class="text-gray-500">
          Category: {{ product.categories }}
        </p>
        <div class="flex items-center gap-4 mt-2">

  <button
    @click="decrease"
    :disabled="quantity === 1"
    class="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
  >
    -
  </button>

  <span class="text-lg font-semibold w-6 text-center">
    {{ quantity }}
  </span>

  <button
    @click="increase"
    :disabled="product && quantity === product.stock"
    class="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
  >
    +
  </button>

</div>

        <p class="text-gray-500">
          Stock: {{ product.stock }}
        </p>

        <button class="mt-4 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          Add to Cart
        </button>
      </div>

    </div>

  </div>
</template>