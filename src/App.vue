<script setup>
  import HomePage from "./components/HomePage.vue";
  import LandingPage from "./components/LandingPage.vue";
  import { ref } from 'vue'
  import { auth } from './firebase/index'

  let isLoggedIn = ref(true)

  auth.onAuthStateChanged(function (user) {
    if (user) {
      isLoggedIn.value = true
      console.log("logged in: ", auth)
    } else {
      isLoggedIn.value = false
      console.log("logged out: ", auth)
    }
  })
</script>

<template>
  <HomePage v-if="isLoggedIn" />
  <LandingPage v-else />
</template>

