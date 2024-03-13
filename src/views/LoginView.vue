<script setup>
import {ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {login, getUsername} from "../services/auth.service";
import {reactive} from "vue";

const username = ref("");
const password = ref("");
const router = useRouter();

const handleLogin = event => {
  event.preventDefault();

  const data = {
    username: username.value,
    password: password.value,
  };

  login(data, (success, tokenOrError) => {
    // Use the login function with a callback
    if (success) {
      localStorage.setItem("token", tokenOrError); // Store the token in local storage
      const username = getUsername(tokenOrError); // Get the username from the token
      console.log("Logged in as", username);

      const currentRoute = router.currentRoute.value;
      if (currentRoute.query.redirect) {
        router.push(currentRoute.query.redirect.toString());
      } else {
        router.push("/");
      }
    } else {
      // Handle login error, e.g., show error message
      console.error("Login error:", tokenOrError);
    }
  });
};
</script>

<template>
  <h1>Login</h1>
  <div>
    <div class="flex flex-col gap-3">
      <div class="flex flex-col justify-center items-center w-full my-5">
        <h1 class="font-bold text-3xl my-2">Classico</h1>
        <h1 class="text-xl">Welcome back!</h1>
        {/*
        <h1>{username}</h1>
        */}
      </div>
      <form @submit="handleLogin" class="flex flex-col justify-center items-center w-full gap-2">
        <input v-model="username" class="w-full px-2 py-2 border outline-none rounded-lg bg-none" placeholder="Enter your username" name="username" />
        <input v-model="password" class="w-full px-2 py-2 border outline-none rounded-lg bg-none" type="password" placeholder="******" name="password" />
        <div class="w-full h-9 flex items-center">
          <!-- <p class="text-red-500 mb-2 ml-2">{loginFailed}</p> -->
        </div>
        <button class="w-full px-2 py-2 border outline-none rounded-lg bg-slate-700 text-white" type="submit">Sign in</button>
      </form>

      <p class="text-sm py-5 text-center">
        Don&apos;t have an account?{" "}
        <!-- <Link to={"/register"} class="font-bold text-blue-600">
            Register
          </Link> -->
      </p>
      <div>
        <div class="inline-flex items-center relative justify-center w-full">
          <hr class="w-64 h-px my-8 border-0" />
          <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 left-1/2">or</span>
        </div>
      </div>
    </div>
  </div>
</template>
