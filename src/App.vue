<script setup>
import {computed} from "vue";
import {RouterView} from "vue-router";
import Navbar from "./components/Navbar/Navbar.vue";
import {useStore} from "./store/Store";

const store = useStore();

const darkMode = computed(() => store.darkMode);
</script>

<template>
  <div id="app" :class="darkMode ? 'bg-slate-900 text-white' : 'bg-slate-100'" class="font-poppins min-h-screen sm:px-5 md:px-10 lg:px-12 xl:px-40 2xl:px-[18rem]">
    <Navbar />
    <RouterView></RouterView>
    <div></div>
  </div>
</template>
