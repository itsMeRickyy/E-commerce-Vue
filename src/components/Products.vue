<script setup>
import {ref, computed} from "vue";
import ProductCard from "./Card/ProductCard.vue";
import {useProductsStore} from "../store/useProductsStore";
import {useCartStore} from "../store/useCartStore";
import {useStore} from "../store/Store";
const store = useStore();
const darkMode = computed(() => store.darkMode);

const cartStore = useCartStore();

const props = defineProps({
  product: Object, // Define expected prop type (optional)
});

let rate = ref(null);
let rateCount = ref(null);

const productStore = useProductsStore();
const products = computed(() => productStore.products);

const isLoading = ref(false);
</script>

<template>
  <div :class="darkMode ? ' text-slate-800' : 'bg-slate-100'" class="products flex w-full overflow-hidden gap-3 justify-between flex-wrap relative">
    <!-- <div v-if="isLoading">Loading...</div> -->

    <div v-if="products && products.length > 0" v-for="product in products" :key="product.id">
      <ProductCard :product="product" handleAddtoCart="handleAddtoCart(product)" />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>
