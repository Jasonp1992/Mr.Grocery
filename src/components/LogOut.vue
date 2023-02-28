<script setup>
    import { auth } from '../firebase/index'

    const logOut = () => {
        auth.signOut()
            .then(function () {
                console.log("Signed Out", auth)
            })
            .catch((error) => {
                console.log("Sign Out Error", error)
            })
    }
</script>

<template>
        <button class="bg-pretty-blue p-1 pl-4 pr-4 rounded-2xl drop-shadow-lg max-h-10" @click="logOut">Log Out</button>
</template>