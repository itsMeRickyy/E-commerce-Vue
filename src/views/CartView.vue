<script setup>
import {onMounted, ref, computed} from "vue";
import {useCartStore} from "../store/useCartStore";
import PaymentCard from "../components/PaymentCard.vue";

const store = useCartStore();

const cart = computed(() => {
  return store.cart || {};
});

const totalPrice = ref(0);

onMounted(async () => {
  const sum = cart.value.reduce((acc, item) => acc + item.price * item.quantity, 0);
  totalPrice.value = sum;
});
</script>

<template>
  <!-- cart -->
  <div class="flex gap-5 justify-between">
    <div class="flex flex-col gap-5 w-[65%]">
      <div class="bg-gray-200 border rounded-xl overflow-hidden p-3">
        <h1 class="text-2xl font-bold mb-4">Review Item And Shipping</h1>
        <div v-if="store.cart.length == 0">No item</div>
        <div class="flex flex-col gap-3">
          <div class="flex justify-between" v-for="item in store.cart" :key="item.id">
            <div class="flex gap-3">
              <div class="w-24 h-24 p-6 flex items-center bg-white rounded-lg">
                <img :src="item.image" alt="" />
              </div>
              <p class="font-bold">{{ item.title.substring(0, 20) }}</p>
            </div>
            <div class="flex flex-col">
              <h1>${{ item.price }}</h1>
              <p>Quantity: {{ item.quantity }}</p>
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
</template>
