<script setup>
import {Swiper, SwiperSlide} from "swiper/vue";
import {Navigation, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {ref, onMounted} from "vue";

import {IconCaretLeft, IconCaretRight} from "@tabler/icons-vue";

const mySwiper = ref(null);

function onSwiper(swiper) {
  mySwiper.value = swiper;
}

function prevSlide() {
  if (mySwiper.value) {
    mySwiper.value.slidePrev();
  }
}

function nextSlide() {
  if (mySwiper.value) {
    mySwiper.value.slideNext();
  }
}

const swiperOptions = {
  autoplay: {
    delay: 3000,
  },
};

// const swiper = new Swiper(".swiper-container", {
//   modules: [Navigation, Pagination],
//   Navigation: {
//     prevEl: ".swiper-button-prev",
//     nextEl: ".swiper-button-next",
//   },
// });

const slider = " absolute top-1/2 transform -translate-y-1/2 left-4 text-white w-8 h-8 items-center justify-center rounded-full cursor-pointer flex invisible group-hover:visible fill-white";
</script>

<template>
  <div class="swiper relative group">
    <!-- <div class="flex w-full justify-between z-30 translate-y-5">
      <div @click="prevSlide" class="z-20 p-5 bg-blue-500">
        <IconCaretLeft />
      </div>
      <div @click="nextSlide" class="z-20 p-5 bg-blue-500">
        <IconCaretRight />
      </div>
    </div> -->
    <swiper class=".swiper-container -z-20" options="swiperOptions" :modules="[Navigation, Pagination]" :loop="true" @swiper="onSwiper">
      <swiper-slide class="swiper-slide mb-2 flex flex-col bg-red-300 relative overflow-hidden rounded-xl">
        <div class="flex justify-center">
          <img src="../../assets/banner1.jpg" alt="" />
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-slide mb-2 flex flex-col bg-red-300 relative overflow-hidden rounded-xl">
        <div class="flex justify-center">
          <img src="../../assets/banner2.jpg" alt="" />
        </div>
      </swiper-slide>
    </swiper>

    <!-- <div @click="prevSlide" :class="slider" class="left-5 swiper-button-prev"><IconCaretLeft /> left</div>
    <div @click="nextSlide" :class="slider" class="swiper-button-next right-left-5"><IconCaretRight /> next</div> -->
  </div>
</template>

<style scoped>
.swiper-slide {
  z-index: -1;
}
</style>
