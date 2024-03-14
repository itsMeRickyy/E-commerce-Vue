<script setup>
import {computed, ref} from "vue";
import {useProductsStore} from "../store/useProductsStore";
const store = useProductsStore();
const products = computed(() => store.products);
// const products = ref(store.products);
</script>

<template>
  <div class="grid grid-cols-3 grid-rows-2 gap-5 my-5">
    <div v-if="products.length > 1" class="col-span-2 h-44 rounded-2xl relative overflow-hidden">
      <p className="absolute bottom-2  left-2  bg-gray-200 text-black rounded-full px-2 py-1">Men's Clothing</p>
      <div class="flex justify-center w-full h-full bg-white">
        <img class="object-cover" :src="products[1].image" alt="" />
      </div>
    </div>

    <div v-if="products.length > 1" class="h-44 rounded-2xl bg-purple-300 relative overflow-hidden">
      <p className="absolute bottom-2  left-2  bg-gray-200 text-black rounded-full px-2 py-1">Women's Clothing</p>
      <div class="flex justify-center w-full h-full bg-white">
        <img class="object-cover" :src="products[19].image" alt="" />
      </div>
    </div>
    <div v-if="products.length > 1" class="h-44 rounded-2xl bg-purple-300 relative overflow-hidden">
      <p className="absolute bottom-2  left-2  bg-gray-200 text-black rounded-full px-2 py-1">Electronics</p>
      <div class="flex justify-center w-full h-full bg-white">
        <img class="object-cover" :src="products[13].image" alt="" />
      </div>
    </div>
    <div v-if="products.length > 1" class="col-span-2 h-44 rounded-2xl relative overflow-hidden">
      <p className="absolute bottom-2  left-2  bg-gray-200 text-black rounded-full px-2 py-1">Jewelery</p>
      <div class="flex justify-center w-full h-full bg-white">
        <img class="object-cover" :src="products[7].image" alt="" />
      </div>
    </div>
  </div>
</template>
