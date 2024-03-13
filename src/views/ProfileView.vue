<script setup>
import {getUsername} from "../services/auth.service";

const hasToken = localStorage.getItem("token"); // Check for token existence
const username = hasToken ? getUsername(localStorage.getItem("token")) : "";
</script>

<template>
  <div>
    <h1>{{ username ? "Hii" + username : "Please Login" }}</h1>
  </div>
</template>
