<script setup>
    import { ref } from "vue"
    import { auth } from "../firebase/index"

    let isLoggedIn = ref(false)

    auth.onAuthStateChanged((user) => {
        if (user) {
            isLoggedIn.value = true
        } else {
            isLoggedIn.value = false
        }
    })
</script>

<template>
    <p v-if="isLoggedIn">Hello {{ auth.currentUser.displayName }}</p>
    <p v-else>Please sign in</p>
</template>