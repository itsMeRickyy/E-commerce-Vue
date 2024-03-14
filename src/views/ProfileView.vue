<script setup>
import {getUsername} from "../services/auth.service";
import {RouterLink} from "vue-router";

const hasToken = localStorage.getItem("token"); // Check for token existence
const username = hasToken ? getUsername(localStorage.getItem("token")) : "";

const isLoggedIn = localStorage.getItem("token");

// if (!isLoggedIn) {
//   window.location.href = "/login";
// }
</script>

<template>
  <div v-if="!isLoggedIn">
    <h1>Please</h1>
    <RouterLink to="/login">Login</RouterLink>
  </div>
  <div v-else="isLoggedIn">
    <h1>Hello, {{ username }}</h1>
  </div>
</template>
