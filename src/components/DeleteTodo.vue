<script setup>
    import { doc, deleteDoc } from "firebase/firestore";
    import { db } from "../firebase/index"
    const props = defineProps(['itemId'])

    const handleDelete = async () => {
        await deleteDoc(doc(db, "shoppingList", props.itemId))
    }
</script>

<template>
    <button @click="handleDelete"> Delete </button>
</template>