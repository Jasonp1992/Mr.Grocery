<script setup>
  import todo from "./components/todo.vue";
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue";
</script>

<template>
  <Header />
  <todo />
  <RouterView></RouterView>
  <Footer />
</template>

<style scoped>
</style>
