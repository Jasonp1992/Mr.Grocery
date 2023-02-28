<script setup>
    import LogOut from './LogOut.vue';
    import { Bars3Icon } from "@heroicons/vue/24/outline";
</script>

<template>
    <header class="bg-slick-gray h-14 flex justify-between items-center pr-2 pl-2">
        <div>
            <Bars3Icon class="h-6 w-6 text-gray-300 inline mr-2" />
            <h1 class="font-indie-flower text-2xl inline">Untitled Grocery App</h1>
        </div>
        <logOut />
    </header>        
</template>
