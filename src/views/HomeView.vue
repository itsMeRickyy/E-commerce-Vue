<script setup>
import ProductsView from "./ProductsView.vue";
import Footer from "../components/Footer.vue";
import CategoriesGroup from "../components/CategoriesGroup.vue";
import BannerPromo from "../components/Promo/BannerPromo.vue";
</script>

<template>
  <!-- <div class="w-full h-[20rem] mb-2 flex flex-col justify-center bg-blue-200 p-10">
    <h1 class="text-3xl font-bold">Grab Upto 50% Off On</h1>

    <h1 class="text-3xl font-bold">Selected Products</h1>
    <div>
      <button class="px-5 py-2 bg-blue-600 text-white text-sm rounded-full my-3">Buy Now</button>
    </div>
  </div> -->
  <BannerPromo />
  <ProductsView />
  <CategoriesGroup />
  <Footer />
</template>
