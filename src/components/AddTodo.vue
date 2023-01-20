<script setup>
    import { ref } from "vue"
    import { collection, addDoc } from "firebase/firestore"; 
    import { db } from '../firebase/index'

    let todoInput = ref("")

    const addToDb = async() => {
    try {
      await addDoc(collection(db, "todos"), {
        content: todoInput.value
      });
      todoInput.value = ""
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
</script>

<template>
    <form @submit.prevent="addToDb">
        <label>New Todo Item</label>
        <br />
        <input class="text-black" type="text" v-model="todoInput" />
    </form>
</template>

<style>

</style>