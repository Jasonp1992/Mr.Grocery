<script setup>
    import { useRecipeSearchStore } from "../store/recipeSearchStore"
    import { storeToRefs } from "pinia"
    import { onMounted } from "vue";
    import axios from "axios";

    const recipeSearch = useRecipeSearchStore()

    const { searchItem, recipes, recipe, instructions } = storeToRefs(recipeSearch)
    
</script>

<template>
    <dic>
        <h1>SINGLE PAGE RECIPE</h1>

        <h2>{{ recipe.title }}</h2>
        <img :src=recipe.image />
        <span>{{ recipe.summary ? recipe.summary.replace(/<(.*?)>/gm, '') : null }}</span>
        <ul>
            <li v-for="item in recipe.extendedIngredients">{{ item.original }}</li>
        </ul>

       
        

        <RouterLink class="text-gray" to="/">back to search</RouterLink>
    </dic>
</template>