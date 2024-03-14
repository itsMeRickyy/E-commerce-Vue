<script setup>
import {ref, computed} from "vue";
import {useRouter} from "vue-router";
import {useProductsStore} from "../store/useProductsStore";
import ProductCard from "../components/Card/ProductCard.vue";
import {useStore} from "../store/Store";
const store = useStore();
const darkMode = computed(() => store.darkMode);

const router = useRouter();
const searchTerm = ref(router.currentRoute.value.params.searchTerm);

const productStore = useProductsStore();
const products = computed(() => productStore.products);

const filteredProducts = computed(() => {
  if (searchTerm.value) {
    return products.value.filter(product => product.title.toLowerCase().includes(searchTerm.value.toLowerCase()));
  } else {
    return products.value;
  }
});
console.log(filteredProducts.value);
</script>

<template>
  <h1>Search Result for {{ searchTerm }}</h1>
  <div :class="darkMode ? ' text-slate-800' : 'bg-slate-100'" class="products flex w-full overflow-hidden gap-3 justify-between flex-wrap relative">
    <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
  </div>
</template>
