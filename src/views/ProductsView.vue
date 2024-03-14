<script setup>
import {ref, computed} from "vue";
import {IconCaretDownFilled, IconHeart} from "@tabler/icons-vue";
import Products from "../components/Products.vue";
import {getCategories} from "../services/fetchProducts";
import {useProductsStore} from "../store/useProductsStore";

const productStore = useProductsStore();
const categories = computed(() => productStore.categories);

console.log(productStore.categories);
</script>

<template>
  <h1 class="text-2xl font-bold">Today Best Deals For You!</h1>

  <div class="flex justify-between my-3">
    <div class="flex justify-between gap-3 w-[50%]">
      <!-- <div v-if="isLoading">Loading...</div> -->

      <div v-for="(category, index) in productStore.categories" :key="index">
        <button class="border border-slate-400 text-sm rounded-full px-4 py-1 overflow-hidden whitespace-nowrap text-ellipsis flex">{{ category }}</button>
      </div>
    </div>
    <button class="flex items-center border border-slate-400 text-sm rounded-full px-4">Sort by <IconCaretDownFilled /></button>
  </div>
  <Products />
</template>
