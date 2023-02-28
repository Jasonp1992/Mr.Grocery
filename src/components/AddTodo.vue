<script setup>
    import { ref } from "vue"
    import { collection, addDoc } from "firebase/firestore"; 
    import { db, auth } from '../firebase/index'

    let todoInput = ref("")

  const addToDb = async() => {
    try {
      const userDoc = collection(db, `shoppingList`)
      await addDoc(userDoc, { userId: auth.currentUser.uid, content: todoInput.value, active: false })
      todoInput.value = ""
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
</script>

<template>
    <form @submit.prevent="addToDb">

        <input class="text-black" type="text" v-model="todoInput" />
    </form>
</template>

<style>

</style>
