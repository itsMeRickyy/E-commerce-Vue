<script setup>
import {onMounted, ref, computed} from "vue";
import {useCartStore} from "../store/useCartStore";
import PaymentCard from "../components/PaymentCard.vue";
import ProductCard from "../components/Card/ProductCard.vue";
import AlertCard from "../components/Card/AlertCard.vue";
import Products from "../components/Products.vue";
import {useProductsStore} from "../store/useProductsStore";
import {IconTrash, IconShoppingCartX} from "@tabler/icons-vue";
const productStore = useProductsStore();
const store = useCartStore();

const products = computed(() => productStore.products.slice(0, 5));

const cart = computed(() => {
  return store.cart || {};
});

const addQty = store.addQty;
const subQty = store.subQty;
// const removeAll = store.removeAll;

const showConfirm = ref(false);

const handleRemoveAll = () => {
  showConfirm.value = true;
};

const removeAll = () => {
  store.removeAll();
  showConfirm.value = false;
};
</script>

<template>
  <!-- cart -->
  <div class="flex gap-5 justify-between">
    <div class="flex flex-col gap-5 w-[65%]">
      <div class="bg-gray-200 border rounded-xl overflow-hidden p-3">
        <div class="flex justify-between">
          <h1 class="text-2xl font-bold mb-4">Review Item And Shipping</h1>
          <button v-if="store.cart.length > 0" @click="handleRemoveAll" class="p-3 opacity-30 hover:opacity-100"><IconShoppingCartX /></button>
          <button v-else class="p-3 hidden"><IconTrash /></button>
          <!-- <AlertCard v-if="showConfirm" @confirm="removeAll" @cancel="showConfirm = false" /> -->
          <div class="absolute grid place-items-center inset-0 z-10" v-if="showConfirm">
            <div class="w-64 h-32 p-3 rounded-xl border border-gray-400 flex flex-col justify-center items-center gap-2">
              <h1>Are you sure want to delete all item?</h1>
              <div class="flex gap-2">
                <button @click="removeAll" class="px-3 py-1 bg-gray-600 text-white rounded-lg">Delete</button>
                <button @click="showConfirm = false" class="px-3 py-1 bg-gray-600 text-white rounded-lg">Cancel</button>
              </div>
            </div>
          </div>
        </div>
        <div v-if="store.cart.length == 0">No item</div>
        <div class="flex flex-col gap-3">
          <div class="flex justify-between" v-for="item in store.cart" :key="item.id">
            <div class="flex gap-3">
              <div class="w-24 h-24 p-6 flex items-center bg-white rounded-lg">
                <img :src="item.image" alt="" />
              </div>
              <p class="font-bold">{{ item.title.substring(0, 20) }}</p>
            </div>
            <div class="flex">
              <div class="flex flex-col justify-between">
                <h1 class="font-bold text-lg">${{ item.price }}</h1>
                <div class="flex gap-4 px-4 py-1 rounded-xl bg-gray-600 text-white">
                  <button @click="subQty(item.id)">-</button>
                  <p>{{ item.quantity }}</p>
                  <button @click="addQty(item.id)">+</button>
                </div>
              </div>
              <div class="px-2">
                <button @click="store.removeFromCart(item.id)">
                  <IconTrash class="w-6 h-6 opacity-30 hover:opacity-100" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-200 border rounded-xl p-3 hidden">
        <h1 class="text-2xl font-bold">Delivery Information</h1>
        <div>
          <form action="">
            <div class="flex gap-2">
              <div class="flex flex-col">
                <label class="font-bold text-sm" for="first-name">First Name*</label>
                <input class="rounded-lg" type="text" name="first-name" id="first-name" />
              </div>
              <div class="flex flex-col">
                <label class="font-bold text-sm" for="last-name">Last Name*</label>
                <input class="rounded-lg" type="text" name="last-name" id="Last-name" />
              </div>
            </div>
            <div class="flex gap-2">
              <div class="flex flex-col">
                <label class="font-bold text-sm" for="mobile">Mobile*</label>
                <input class="rounded-lg" type="text" name="mobile" id="mobile" />
              </div>
              <div class="flex flex-col">
                <label class="font-bold text-sm" for="email">Email*</label>
                <input class="rounded-lg" type="text" name="email" id="email" />
              </div>
            </div>
            <div class="flex gap-2">
              <div class="flex flex-col w-full">
                <label class="font-bold text-sm" for="city-town">City/ Town*</label>
                <input class="rounded-lg" type="text" name="city-town" id="city-town" />
              </div>
            </div>
            <div class="flex gap-2">
              <div class="flex flex-col">
                <label class="font-bold text-sm" for="city-town">City/ Town*</label>
                <input class="rounded-lg" type="text" name="city-town" id="city-town" />
              </div>
              <div class="flex flex-col">
                <label class="font-bold text-sm" for="zip-code">Zip Code*</label>
                <input class="rounded-lg" type="text" name="zip-code" id="zip-code" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="bg-gray-200 p-3 rounded-xl w-[35%]">
      <PaymentCard />
    </div>
  </div>
  <div>
    <h1>Product maybe you like</h1>
    <!-- <div v-if="products.length > 1" class="col-span-2 h-44 rounded-2xl relative overflow-hidden">
      <p className="absolute bottom-2  left-2  bg-gray-200 text-black rounded-full px-2 py-1">Men's Clothing</p>
      <div class="flex justify-center w-full h-full bg-white">
        <img class="object-cover" :src="products[1].image" alt="" />
      </div>
    </div> -->
    <div :class="darkMode ? ' text-slate-800' : 'bg-slate-100'" class="products flex w-full overflow-hidden gap-3 justify-between flex-wrap relative">
      <div v-for="product in products" :key="products.id">
        <ProductCard :product="product" handleAddtoCart="handleAddtoCart(product)" />
      </div>
    </div>
  </div>
</template>
