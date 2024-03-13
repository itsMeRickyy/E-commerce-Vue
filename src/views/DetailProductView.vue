<script setup>
import {onMounted, ref, computed} from "vue";
import {useRoute} from "vue-router";
import {getDetailProduct} from "../services/fetchProducts";
import {IconStarFilled} from "@tabler/icons-vue";
import {useCounterStore} from "../store/useCounterStore";
import {useCartStore} from "../store/useCartStore";
import {useStore} from "../store/Store";

const DarkModeStore = useStore();
const darkMode = computed(() => DarkModeStore.darkMode);

const store = useCartStore();

const route = useRoute();
const id = route.params.id;
const detailProduct = ref(null);
let rate = ref(null);
let rateCount = ref(null);
let description = ref(null);
const readMore = ref(false);
const qty = ref(1);

const addQty = () => {
  qty.value++;
};

const subQty = () => {
  if (qty.value > 1) {
    qty.value--;
  }
};

const toggleReadMore = () => {
  readMore.value = !readMore.value;
};

onMounted(async () => {
  detailProduct.value = await getDetailProduct(id);
  rate = detailProduct.value.rating.rate;
  rateCount = detailProduct.value.rating.count;
  description = detailProduct.value.description;
});

// Create a computed property to safely access the detailProduct data
const product = computed(() => {
  return detailProduct.value || {}; // Return an empty object if detailProduct is null or undefined
});

const handleAddtoCart = () => {
  store.addToCart(product.value, qty.value);
  // console.log(product.value, qty.value);
};

// const cart = computed(() => {
//   return store.cart || {};
// });

// const totalPrice = ref(0);

// onMounted(async () => {
//   const sum = cart.value.reduce((acc, item) => acc + item.price * item.quantity, 0);
//   totalPrice.value = sum;
// });

// console.log("this is total price", totalPrice.value);

// console.log("this is cart", cart.value);
</script>

<template>
  <div v-if="product" class="flex pt-10 h-screen">
    <div class="flex flex-col gap-10 w-[50%]">
      <div class="w-[28rem] h-[28rem] p-32 overflow-hidden bg-white rounded-lg shadow-xl flex items-center">
        <img class="hover:scale-125 transition-all ease-in-out duration-300" :src="product.image" alt="" />
      </div>
      <div class="flex h-36 gap-x-5">
        <div class="w-24 h-24 overflow-hidden p-6 flex items-center bg-white rounded-lg shadow-xl">
          <img :src="product.image" alt="" />
        </div>
        <div class="w-24 h-24 overflow-hidden p-6 flex items-center bg-white rounded-lg shadow-xl">
          <img :src="product.image" alt="" />
        </div>
        <div class="w-24 h-24 overflow-hidden p-6 flex items-center bg-white rounded-lg shadow-xl">
          <img :src="product.image" alt="" />
        </div>
        <div class="w-24 h-24 overflow-hidden p-6 flex items-center bg-white rounded-lg shadow-xl">
          <img :src="product.image" alt="" />
        </div>
      </div>
    </div>
    <div class="flex flex-col w-[50%] px-10">
      <div class="flex flex-col border-b pb-5">
        <h1 class="text-3xl font-bold">{{ product.title }}</h1>

        <p @click="toggleReadMore" class="cursor-default" v-if="!readMore">
          {{ description ? (description.length > 100 ? description.substring(0, 100) + "..." : description) : "" }}
        </p>
        <p @click="toggleReadMore" class="cursor-default" v-if="readMore">{{ product.description }}</p>
        <button class="text-slate-500 text-sm" @click="toggleReadMore">{{ readMore ? "See Less" : "See More" }}</button>
        <div class="flex">
          <IconStarFilled color="#FFC107" />
          <h1>{{ rate }}({{ rateCount }})</h1>
        </div>
      </div>
      <div class="py-10 flex flex-col gap-5">
        <h1 class="text-3xl font-bold">${{ product.price }}</h1>
        <div class="flex w-36 justify-between items-center rounded-full bg-slate-300 overflow-hidden">
          <button @click="subQty" class="p-2 px-4">-</button>
          <h1>{{ qty }}</h1>
          <button @click="addQty" class="p-2 px-4">+</button>
        </div>
        <div class="flex gap-5">
          <button @click="handleAddtoCart(product.value)" class="w-full bg-blue-700 text-white p-3 rounded-lg">+ Add to Cart</button>
          <button class="w-full border-2 border-blue-700 text-blue-700 p-3 rounded-lg">Buy Now</button>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    Loading...
    <!-- Optionally, you can show a loading indicator -->
  </div>
</template>
