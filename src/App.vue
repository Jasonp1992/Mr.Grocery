<script setup>
  import todo from "./components/todo.vue";
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue";
  import LandingPage from "./components/LandingPage.vue";
  import { ref } from 'vue'
  import { db, auth } from './firebase/index'

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
  <Header v-if="isLoggedIn" />
  <LandingPage v-else />
</template>

<style scoped>
</style>
