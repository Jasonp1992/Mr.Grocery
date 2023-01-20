<script setup>
    import AddTodo from './AddTodo.vue';
    import { ref } from "vue";

    let showAdd = ref(false)

    const handleShowAdd = () => {
        showAdd.value = !showAdd.value
    }
</script>

<template>
    <div id="header" class="h-18">
        <h1 class="header-title text-red">Todo List</h1>
        <p @click="handleShowAdd">Add Todo</p>
        <AddTodo v-show="showAdd"/>
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