<script setup>
import {onMounted, ref, computed} from "vue";
import {useCartStore} from "../store/useCartStore";

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
  <div>
    <h1 class="text-2xl font-bold">Order Summery</h1>
    <div class="flex justify-between bg-gray-50 px-2 py-1 my-4 rounded-full overflow-hidden">
      <input class="outline-none w-44 bg-transparent" placeholder="Enter your coupon" type="text" name="" id="" />
      <button class="bg-blue-600 text-white p-2 whitespace-nowrap rounded-full text-sm">Apply Coupon</button>
    </div>
    <div class="my-4">
      <h1 class="font-bold text-lg mb-1">Payment Details</h1>
      <div class="payment flex flex-col gap-2">
        <div className="flex items-center ">
          <input type="radio" value="option-one" id="option-one" name="payment-method" />
          <label htmlFor="option-one">Cash on delivery(COD)</label>
        </div>
        <div className="flex items-center ">
          <input class="" type="radio" value="option-two" id="option-two" name="payment-method" />
          <Label htmlFor="option-two">Paypal</Label>
        </div>
        <div className="flex items-center ">
          <input class="" type="radio" value="option-two" id="option-two" name="payment-method" />
          <Label htmlFor="option-two">Credit or Debit card</Label>
        </div>
      </div>
      <div>
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <tbody>
              <tr class="">
                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Sub total</th>
                <td class="px-6 py-4">
                  {{ totalPrice }}
                </td>
              </tr>
              <tr class="">
                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Coupon Discount</th>
                <td class="px-6 py-4">$0</td>
              </tr>
              <tr class="">
                <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Shipping cost</th>
                <td class="px-6 py-4">$0</td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="font-semibold text-gray-900 dark:text-white">
                <th scope="row" class="px-6 py-3 text-base">Total</th>
                <td class="px-6 py-3">{{ totalPrice }}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <button class="bg-blue-600 text-white p-2 whitespace-nowrap rounded-full text-sm w-full">Pay ${{ totalPrice }}</button>
      </div>
    </div>
  </div>
</template>
