<script setup>
import {IconHeart, IconStarFilled, IconShoppingCart} from "@tabler/icons-vue";
import {useStore} from "../../store/Store";
import {computed} from "vue";
import {useCartStore} from "../../store/useCartStore";
const cartStore = useCartStore();

const darkModeStore = useStore();
const darkMode = computed(() => darkModeStore.darkMode);

const props = defineProps({
  product: Object,
});

const handleAddtoCart = selectedProduct => {
  cartStore.addToCart(selectedProduct, 1);
  console.log(selectedProduct, 1);
};
</script>

<template>
  <div :class="darkMode ? ' bg-gray-800 text-white' : 'bg-white'" class="w-48 h-64 md:w-48 md:h-72 flex flex-col rounded-xl shadow-md relative overflow-hidden">
    <div class="absolute top-5 right-5 z-10 bg-gray-200 rounded-full p-2">
      <IconHeart />
    </div>
    <RouterLink :to="`/product/` + props.product.id">
      <div class="p-14 w-48 h-48 bg-white overflow-hidden relative">
        <img class="hover:scale-125 transition-all ease-in-out duration-300" :src="props.product.image" />
      </div>
    </RouterLink>
    <div class="flex flex-col justify-between h-20 px-3">
      <div class="flex flex-col">
        <h1 class="text-sm font-normal line-clamp-1">{{ props.product.title.substring(0, 30) }}...</h1>
        <div class="flex text-sm items-center gap-1">
          <IconStarFilled class="text-yellow-500 h-4 w-4" />
          <p>{{ props.product.rating.rate }}</p>
        </div>
      </div>

      <div class="flex justify-between">
        <p class="whitespace-nowrap font-bold">$ {{ props.product.price }}</p>
        <button @click="handleAddtoCart(product)" class="px-2 py-2 border border-slate-800 rounded-lg">
          <IconShoppingCart />
        </button>
      </div>
    </div>
  </div>
</template>
