<script setup>
  import todo from "./components/todo.vue";
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue";
</script>

<template>
  <Header />
  <div class="flex justify-center">
    <RouterView></RouterView>
    <todo class="min-w-max"/>
  </div>
  <Footer />
</template>

<style scoped>
</style>
