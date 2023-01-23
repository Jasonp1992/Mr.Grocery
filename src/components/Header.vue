<script setup>
    import AddTodo from './AddTodo.vue';
    import { ref } from "vue";
    import SignIn from "./SignIn.vue"
    import LoggedInMessage from './LoggedInMessage.vue';

    let showAdd = ref(false)

    const handleShowAdd = () => {
        showAdd.value = !showAdd.value
    }
</script>

<template>
    <div id="header" class="h-20 flex flex-row">
        <div class="flex-1 flex flex-row gap-2 item-center">
            <h1 class="text-2xl">Shopping List Maker</h1>
            <button @click="handleShowAdd" class="hover:underline">Add To Shopping List</button>
            <AddTodo v-show="showAdd"/>
        </div>
        <div>
            <LoggedInMessage />
            <SignIn />
        </div>
    </div>
</template>

<style>
    #header {
        display: flex;
        gap: 20px;
        padding: 10px;
        background-color: rgba(147, 219, 195, 0.727);
        align-items: center;
        }
</style>